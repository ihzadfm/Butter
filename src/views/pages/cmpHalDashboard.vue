<template>
    <div id="page-content" style="min-height: 850px">
      <div class="block">
      <!-- Block Title -->
      <div class="block-title">
        <h2>
          <strong>MENU {{ $root.judulHalaman }}</strong>
        </h2>

        <i v-if="!status_table" class="fa fa-spinner fa-spin text-default"></i>
      </div>
      <!-- END Block Title -->

      <div class="block-content">
        <div class="min-h-screen bg-gray-100 flex">
    <div class="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Chart 1: API 1 -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold mb-4 text-gray-800" >Budget vs Realization per Term 1</h2>
          <apexchart
            ref="stackedChart1"
            type="bar"
            height="350"
            :options="stackedChartOptions1"
            :series="stackedChartSeries1"
          />
        </div>

        <!-- Chart 2: API 2 -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold mb-4 text-gray-800" >Budget vs Realization per Term 2</h2>
          <apexchart
            ref="stackedChart2"
            type="bar"
            height="350"
            :options="stackedChartOptions2"
            :series="stackedChartSeries2"
          />
        </div>

        <!-- Chart 3: API 3 -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold mb-4 text-gray-800" >Budget vs Realization per Term 3</h2>
          <apexchart
            ref="stackedChart3"
            type="bar"
            height="350"
            :options="stackedChartOptions3"
            :series="stackedChartSeries3"
          />
        </div>
      </div>
    </div>
  </div>

      </div>
      </div>
    </div>
    <!-- Block -->
    
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";

export default defineComponent({
  name: "Dashboard",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      // Options and series for each chart
      stackedChartOptions1: this.getDefaultChartOptions(),
      stackedChartSeries1: [
        { name: "Target", data: [] },
        { name: "Sales", data: [] },
      ],
      stackedChartOptions2: this.getDefaultChartOptions(),
      stackedChartSeries2: [
        { name: "Target", data: [] },
        { name: "Sales", data: [] },
      ],
      stackedChartOptions3: this.getDefaultChartOptions(),
      stackedChartSeries3: [
        { name: "Target", data: [] },
        { name: "Sales", data: [] },
      ],
    };
  },
  methods: {
    getDefaultChartOptions() {
      return {
        chart: {
          type: "bar",
          stacked: false,
          background: "#ffffff",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [],
          title: {
            text: "Kode Beban",
            style: {
              color: "#111827",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
          labels: {
            rotate: -45,
            style: {
              colors: "#111827",
              fontSize: "12px",
              fontWeight: 500,
            },
          },
        },
        yaxis: {
          title: {
            text: "Value",
            style: {
              color: "#111827",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
        },
        colors: ["#3B82F6", "#10B981"],
        grid: {
          borderColor: "#E5E7EB",
          strokeDashArray: 4,
        },
        tooltip: {
          theme: "light",
          y: { formatter: (value) => value.toLocaleString() },
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          labels: { colors: "#111827" },
          markers: { width: 12, height: 12, radius: 6 },
        },
      };
    },
    fetchDataForChart(apiUrl, chartOptions, chartSeries, chartRef) {
      axios
        .get(apiUrl)
        .then((response) => {
          const budgetData = response.data.results;
          chartOptions.xaxis.categories = budgetData.map((item) => item.kodebeban);
          chartSeries[0].data = budgetData.map((item) => parseFloat(item.target));
          chartSeries[1].data = budgetData.map((item) => parseFloat(item.sales));

          this.$nextTick(() => {
            this.$refs[chartRef].updateSeries(chartSeries, true);
            this.$refs[chartRef].updateOptions(chartOptions, true);
          });
        })
        .catch((error) => {
          console.error(`Error fetching data from ${apiUrl}:`, error);
        });
    },
  },
  mounted() {
    // Fetch data for each chart
    this.fetchDataForChart(
      "http://localhost:8002/api/suggestionparam/ALL/ALL/ALL/1",
      this.stackedChartOptions1,
      this.stackedChartSeries1,
      "stackedChart1"
    );
    this.fetchDataForChart(
      "http://localhost:8002/api/suggestionparam/ALL/ALL/ALL/2",
      this.stackedChartOptions2,
      this.stackedChartSeries2,
      "stackedChart2"
    );
    this.fetchDataForChart(
      "http://localhost:8002/api/suggestionparam/ALL/ALL/ALL/3",
      this.stackedChartOptions3,
      this.stackedChartSeries3,
      "stackedChart3"
    );
  },
});
</script>

<style>
/* Menambahkan padding dan margin pada container utama */
.container {
  margin-left: 250px; /* Adjust sesuai lebar sidebar kiri */
}

/* Custom styling untuk chart dan layout */
.apexcharts-tooltip {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 10px;
  font-size: 14px;
}

.grid {
  gap: 1rem;
}

@media (max-width: 768px) {
  .grid {
    gap: 1rem;
  }

  .p-6 {
    padding: 1rem;
  }
}
</style>
