<template>
  <div id="app">
    <!-- Main Content -->
    <div id="page-content">
      <!-- Block -->
      <div class="block">
        <div class="block-title">
          <h2>
            <strong>Master History Budget</strong>
          </h2>

          <input
            type="text"
            placeholder="Search..."
            class="form-control"
            v-model="searchQuery"
            @input="searchHistoryBudget"
            style="width: 250px; display: inline-block; margin-left: 10px"
          />

          <button
            class="btn btn-sm btn-success pull-left"
            @click="exportDetailToXLS()"
          >
            Export Excel
          </button>
        
        </div>
        <div class="block-content">
          <table class="table table-bordered table-striped table-history-budget">
            <thead>
              <tr>
                <th>No</th>
                <th>Kode Beban 1</th>
                <th>Kode Beban 2</th>
                <th>Bulan 1</th>
                <th>Budget Before Bulan 1</th>
                <th>Budget After Bulan 1</th>
                <th>Amount</th>
                <th>Bulan 2</th>
                <th>Budget Before Bulan 2</th>
                <th>Budget After Bulan 2</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in datahistorybudget.data" :key="index">
                <td class="text-center">
                  {{
                    (datahistorybudget.current_page - 1) *
                      datahistorybudget.per_page +
                    index +
                    1
                  }}
                </td>
                <td>{{ item.kodebeban1 }}</td>
                <td>{{ item.kodebeban2 }}</td>
                <td>{{ item.bulan1 }}</td>
                <td>{{ item.amountbulan1 }}</td>
                <td>
                  {{ parseInt(item.amountbulan1) - parseInt(item.amount) }}
                </td>
                <td>{{ item.amount }}</td>
                <td>{{ item.bulan2 }}</td>
                <td>{{ item.amountbulan2 }}</td>
                <td>
                  {{ parseInt(item.amountbulan2) + parseInt(item.amount) }}
                </td>
                <td>{{ item.created_at }}</td>
              </tr>
            </tbody>
          </table>
          <nav
            v-if="datahistorybudget.data && datahistorybudget.data.length > 0"
            class="mt-2"
          >
            <ul class="pagination">
              <li v-if="datahistorybudget.current_page !== 1">
                <a href="#" @click="gethistorybudget(1)" aria-label="First">
                  <span aria-hidden="true">« First</span>
                </a>
              </li>
              <li v-if="datahistorybudget.current_page !== 1">
                <a
                  href="#"
                  @click="gethistorybudget(datahistorybudget.current_page - 1)"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&lt;</span>
                </a>
              </li>
              <template v-for="page in calculatePages()">
                <li
                  :class="{ active: page === datahistorybudget.current_page }"
                >
                  <a href="#" @click="gethistorybudget(page)">{{ page }}</a>
                </li>
              </template>
              <li
                v-if="
                  datahistorybudget.current_page !== datahistorybudget.last_page
                "
              >
                <a
                  href="#"
                  @click="gethistorybudget(datahistorybudget.current_page + 1)"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&gt;</span>
                </a>
              </li>
              <li
                v-if="
                  datahistorybudget.current_page !== datahistorybudget.last_page
                "
              >
                <a
                  href="#"
                  @click="gethistorybudget(datahistorybudget.last_page)"
                  aria-label="Last"
                >
                  <span aria-hidden="true">Last »</span>
                </a>
              </li>
            </ul>
            <div class="pagination-info">
              <span
                >Showing {{ datahistorybudget.from }} to
                {{ datahistorybudget.to }} of
                {{ datahistorybudget.total }} records</span
              >
            </div>
          </nav>
        </div>
      </div>

      <!-- Modal -->
      <div
        :class="modal ? 'modal fade in' : 'modal fade'"
        tabindex="-1"
        role="dialog"
        :style="modal ? 'display: block;' : 'display: none;'"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              {{ flagButtonAdd ? "ADD" : "UPDATE" }} DATA
              <button type="button" class="close" @click="show_modal()">
                <span aria-hidden="true">X</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="kodehistory">Kode History</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="todo.kodehistory"
                  :class="{ 'input-error': errorField.kodehistory }"
                />
              </div>
              <div class="form-group">
                <label for="kodebeban1">Kode Beban 1</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="todo.kodebeban1"
                  :class="{ 'input-error': errorField.kodebeban1 }"
                />
              </div>
              <div class="form-group">
                <label for="kodebeban2">Kode Beban 2</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="todo.kodebeban2"
                  :class="{ 'input-error': errorField.kodebeban2 }"
                />
              </div>
              <div class="form-group">
                <label for="bulan1">Bulan 1</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="todo.bulan1"
                  :class="{ 'input-error': errorField.bulan1 }"
                />
              </div>
              <div class="form-group">
                <label for="bulan2">Bulan 2</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="todo.bulan2"
                  :class="{ 'input-error': errorField.bulan2 }"
                />
              </div>
              <div class="form-group">
                <label for="amount">Amount</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="todo.amount"
                  :class="{ 'input-error': errorField.amount }"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                v-if="flagButtonAdd"
                class="btn btn-primary"
                @click="saveTodo"
              >
                SAVE
              </button>
              <button v-else class="btn btn-primary" @click="editTodo">
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as XLSX from "xlsx";
import axios from "axios";
import apiService from "../../../services/apiService";
import JsonExcel from "vue-json-excel3";

export default {
  components: {
    downloadExcel: JsonExcel,
  },
  data() {
    return {
      excelFields: {
      kodebeban1: "Kode Beban 1",
      kodebeban2: "Kode Beban 2",
      bulan1: "Bulan 1",
      amountbulan1: "Budget Before Bulan 1",
      amountbulan1_after: "Budget After Bulan 1",
      amount: "Amount",
      bulan2: "Bulan 2",
      amountbulan2: "Budget Before Bulan 2",
      amountbulan2_after: "Budget After Bulan 2",
      created_at: "Timestamp",
    },
    namaExcel: "HistoryBudget.xlsx",
      perPage: 25,
      datahistorybudget: [],
      searchQuery: "",
      modal: false,
      flagButtonAdd: true,
      dataTable: [],
      todo: {
        id: null,
        kodehistory: "",
        kodebeban1: "",
        kodebeban2: "",
        bulan1: "",
        bulan2: "",
        amount: "",
      },
      errorField: {
        kodehistory: false,
        kodebeban1: false,
        kodebeban2: false,
        bulan1: false,
        bulan2: false,
        amount: false,
      },
    };
  },
  methods: {
    exportDetailToXLS() {
      try {
        const tables = document.querySelector(".table-history-budget");
        const wb = XLSX.utils.table_to_book(tables, {
          sheet: "Sheet JS",
          bookType: "xls",
        });
        XLSX.writeFile(wb, "HistoryBudgetReclass.xls");
      } catch (error) {
        
        console.error("Error fetching data:", error);
      } 
    },

    async searchHistoryBudget() {
      try {
        this.$root.presentLoading(); // Tampilkan loading jika perlu
        const response = await apiService.makeGet(
          `searchhistorybudget?page=1&perPage=${this.perPage}&search=${this.searchQuery}`
        );
        this.$root.stopLoading();
        if (response.status) {
          this.datahistorybudget = response.data;
        }
      } catch (error) {
        this.$root.stopLoading();
        this.getalert("error", "ERROR", "Terjadi Kesalahan pada Data");
      }
    },

    getalert(icon, title, message) {
      Swal.fire({
        title: title,
        text: message,
        icon: icon,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: "OKE",
      });
    },

    calculatePages() {
      const startPage = Math.max(1, this.datahistorybudget.current_page - 4);
      const endPage = Math.min(startPage + 8, this.datahistorybudget.last_page);
      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    },
    async gethistorybudget(page = 1) {
      try {
        this.$root.presentLoading();
        const response = await apiService.makeGet(
          `historybudget?page=${page}&perPage=${this.perPage}`
        );
        this.$root.stopLoading();
        if (response.status) {
          this.datahistorybudget = response.data;
        }
      } catch (error) {
        this.$root.stopLoading();
        this.getalert("error", "ERROR", "Terjadi Kesalahan pada Data");
      }
    },
    async fetchTableData() {
      try {
        const response = await axios.get("/api/history-budget");
        this.dataTable = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    show_modal() {
      this.modal = !this.modal;
      if (!this.modal) {
        this.resetForm();
      }
    },
    resetForm() {
      this.todo = {
        id: null,
        kodehistory: "",
        kodebeban1: "",
        kodebeban2: "",
        bulan1: "",
        bulan2: "",
        amount: "",
      };
      this.flagButtonAdd = true;
    },
    async saveTodo() {
      try {
        await axios.post("/api/history-budget", this.todo);
        this.fetchTableData();
        this.show_modal();
      } catch (error) {
        console.error("Error saving data:", error);
      }
    },
    async editTodo() {
      try {
        await axios.put(`/api/history-budget/${this.todo.id}`, this.todo);
        this.fetchTableData();
        this.show_modal();
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },
    
    editData(item) {
      this.todo = { ...item };
      this.flagButtonAdd = false;
      this.show_modal();
    },
  },
  mounted() {
    this.gethistorybudget();
  },
};
</script>

<style scoped>
#page-content {
  background-color: #f8f9fa;
  padding: 20px;
  min-height: 100vh;
}

.input-error {
  border: 1px solid red;
}
</style>
