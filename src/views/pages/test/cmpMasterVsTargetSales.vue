<template>
  <!---------------------------- Modal -->
  <div
    :class="modal ? 'modal fade in' : 'modal fade'"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    data-keyboard="false"
    data-backdrop="true"
    :style="modal ? 'display: block;' : 'display: none;'"
  >
    <div class="modal-dialog2 modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          {{ flagButtonAdd ? "ADD" : "UPDATE" }} DATA {{ $root.judulHalaman }}
          <button
            id="closeModal"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            :disabled="$root.flagButtonLoading"
            @click="show_modal()"
          >
            <span aria-hidden="true">X</span>
          </button>
        </div>
        <div class="modal-body">
          <pre>{{ budgetData }}</pre>

          <!-- Wizards Row -->
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example">Brand Code</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="brand code"
                    v-model="todo.brandcode"
                    :class="
                      errorField.brandcode
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    :disabled="!flagButtonAdd"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Item Name</label>
                  <CmpInputText
                    type="text"
                    placeholder="item name"
                    v-model="todo.itemname"
                    :class="
                      errorField.itemname
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Item Code</label>
                  <CmpInputText
                    type="text"
                    placeholder="item code"
                    v-model="todo.itemcode"
                    :class="
                      errorField.itemcode
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Target</label>
                  <CmpInputText
                    type="text"
                    placeholder="target"
                    v-model="todo.target"
                    :class="
                      errorField.target
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Year of Production (YOP)</label>
                  <CmpInputText
                    type="text"
                    placeholder="yop"
                    v-model="todo.yop"
                    :class="
                      errorField.yop
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email"
                    >Month of Production (MOP)</label
                  >
                  <CmpInputText
                    type="text"
                    placeholder="mop"
                    v-model="todo.mop"
                    :class="
                      errorField.mop
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- END Wizards Row -->
        </div>

        <div class="modal-footer">
          <div class="form-group form-actions">
            <div class="col-xs-12">
              <button
                v-if="flagButtonAdd"
                @click="saveTodo()"
                type="button"
                class="btn btn-sm btn-primary pull-left"
                :disabled="
                  $root.flagButtonLoading ||
                  todo.brandcode == null ||
                  todo.brandcode == '' ||
                  todo.brandname == null ||
                  todo.brandname == '' ||
                  todo.target == null ||
                  todo.target == '' ||
                  todo.sales == null ||
                  todo.sales == '' ||
                  todo.yop == null ||
                  todo.yop == '' ||
                  todo.mop == null ||
                  todo.mop == '' ||
                  todo.distcode == null ||
                  todo.distcode == '' ||
                  todo.achievement == null ||
                  todo.achievement == ''
                "
              >
                <i
                  v-if="$root.flagButtonLoading"
                  class="fa fa-spinner fa-spin text-default"
                ></i>
                SAVE DATA
              </button>

              <button
                v-if="!flagButtonAdd"
                @click="editTodo()"
                type="button"
                class="btn btn-sm btn-primary pull-left"
                :disabled="
                  $root.flagButtonLoading ||
                  todo.brandcode == null ||
                  todo.brandcode == '' ||
                  todo.brandname == null ||
                  todo.brandname == '' ||
                  todo.target == null ||
                  todo.target == '' ||
                  todo.sales == null ||
                  todo.sales == '' ||
                  todo.yop == null ||
                  todo.yop == '' ||
                  todo.mop == null ||
                  todo.mop == '' ||
                  todo.distcode == null ||
                  todo.distcode == '' ||
                  todo.achievement == null ||
                  todo.achievement == ''
                "
              >
                <i
                  v-if="$root.flagButtonLoading"
                  class="fa fa-spinner fa-spin text-default"
                ></i>
                UPDATE DATA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---------------------------- Modal -->

  <!-- Page content -->
  <div id="page-content" v-if="isLogin == 1" style="min-height: 850px">
    <!-- END Visible Main Sidebar Header -->

    <!-- Block -->
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
        <!------------------------>
        <!-- Button trigger modal -->
        <!-- <pre>{{ csv}}</pre> -->

        <div v-if="csv != null">
          <strong>{{ csv.length }} </strong> data<br />
        </div>

        <!-- <pre> -->
        <vue-csv-import v-model="csv" :fields="dataImportCsv">
          <vue-csv-toggle-headers></vue-csv-toggle-headers>
          <vue-csv-errors></vue-csv-errors>
          <vue-csv-input></vue-csv-input>
          <vue-csv-table-map
            :auto-match="true"
            :table-attributes="{
              id: 'csv-table',
              class: 'table table-bordered table-hover',
            }"
          ></vue-csv-table-map>
        </vue-csv-import>
        <!-- </pre> -->
        <br />

        <button
          v-if="csv != null"
          @click="saveTodoBulky()"
          type="button"
          class="btn btn-sm btn-primary pull-left"
        >
          SAVE DATA BULKY
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <download-excel
          class="button"
          :data="json_data"
          :fields="json_fields"
          :worksheet="nama_sheetnya"
          :name="nama_excelnya"
          :before-generate="startDownload"
          :before-finish="finishDownload"
        >
          <button
            class="btn btn-sm btn-success pull-left"
            @click="download_excel_xyz()"
          >
            Export Excel
          </button>
        </download-excel>

        <!-- <button
          v-if="status_table && $root.accessRoles[access_page].create"
          class="btn btn-sm btn-primary pull-right"
          @click="show_modal()"
        >
          ADD DATA
        </button> -->

        <button
          class="btn btn-sm custom-file-upload pull-right"
          @click="deleteAllData"
        >
          Delete All Data
        </button>

        <!------------------------>
        <div id="wrapper2"></div>
        <div id="box"></div>
      </div>
      <!-- Block Content -->
      <!-- END Block Content -->
    </div>
    <!-- END Block -->
  </div>
</template>

<script>
import axios from "axios";
import { markRaw } from "vue";
import { Grid, h, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { idID } from "gridjs/l10n";

import loadingBar from "@/assets/img/Moving_train.gif";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import JsonExcel from "vue-json-excel3";

export default {
  components: {
    downloadExcel: JsonExcel,
  },
  data() {
    return {
      access_page: this.$root.decryptData(localStorage.getItem("halaman")),
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      grid: new Grid(),
      // grid2: new Grid(),
      errorField: {
        yop: false,
        mop: false,
        distcode: false,
        brandcode: false,
        brandname: false,
        sales: false,
        target: false,
        achievement: false,
      },

      userid: 0,
      status_table: false,

      modal: false,

      todo: {
        brandcode: "",
        brandname: "",
        sales: "",
        target: "",
        yop: "",
        mop: "",
        distcode: "",
        achievement: "",
      },
      flagButtonAdd: true,
      csv: null,
      dataImportCsv: {
        brandcode: {
          label: "brandcode",
          required: true,
        },
        brandname: {
          label: "brandname",
          required: true,
        },
        sales: {
          label: "sales",
          required: true,
        },
        target: {
          label: "target",
          required: true,
        },
        yop: {
          label: "yop",
          required: true,
        },
        mop: {
          label: "mop",
          required: true,
        },
        distcode: {
          label: "distcode",
          required: true,
        },
        achievement: {
          label: "achievement",
          required: true,
        },
      },
      data_x_tabel: [],

      data_x_excel: [],

      json_meta: [
        [
          {
            key: "charset",

            value: "utf-8",
          },
        ],
      ],

      json_data: [],

      json_fields: {
        yop: "yop",
        mop: "mop",
        distcode: "distcode",
        brandcode: "brandcode",
        brandname: "brandname",
        sales: "sales",
        target: "target",
        achievement: "achievement",
      },

      nama_Worksheet: "Sheet Master TARGET VS SALES",

      nama_excelnya: "",

      nama_sheetnya: "",
    };
  },
  async mounted() {
    // await this.$root.refreshToken(localStorage.getItem("token"));
    this.getTable();
    this.userid = this.$root.get_id_user(localStorage.getItem("unique"));
  },
  methods: {
    async deleteAllData() {
      var mythis = this;
      Swal.fire({
        title: "Delete All Data",
        text: "Are you sure? This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete all",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          mythis.$root.presentLoading();
          const config = {
            data: {
              fileUpload: "form satuan",
              userid: mythis.userid,
            },
          };
          try {
            const response = await axios.delete(
              mythis.$root.apiHost +
                mythis.$root.prefixApi +
                "pocustdelete",
              config
            );
            mythis.$root.stopLoading();
            if (response.data.status) {
              Swal.fire(
                "Deleted!",
                `All data has been deleted. ${response.data.deleted_rows} rows were deleted.`,
                "success"
              );
              mythis.refreshTable();
            } else {
              Swal.fire(
                "Error",
                response.data.message || "Failed to delete all data",
                "error"
              );
            }
          } catch (error) {
            mythis.$root.stopLoading();
            console.error("Error deleting all data:", error);
            let errorMessage = "An error occurred while deleting data";
            if (error.response) {
              errorMessage = error.response.data.message || errorMessage;
            }
            Swal.fire("Error", errorMessage, "error");
          }
        }
      });
    },
    padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    },

    formatDate(date) {
      return (
        [
          date.getFullYear(),

          this.padTo2Digits(date.getMonth() + 1),

          this.padTo2Digits(date.getDate()),
        ].join("-") +
        " " +
        [
          this.padTo2Digits(date.getHours()),

          this.padTo2Digits(date.getMinutes()),

          this.padTo2Digits(date.getSeconds()),
        ].join(":")
      );
    },

    async getDataExportExcel() {
      var mythis = this;

      mythis.$root.presentLoading();

      var nn = 0;

      var count = 1;

      var limitx = 100;

      var offsetx = 0;

      var baris = 0;

      var nomor_x = 1;

      var br_pdf = 0;

      var br_flag = 0;

      var br_string = "";

      var html = "";

      var baris_excel = 0;

      // mythis.json_data = [];

      mythis.data_x_excel = [];

      while (count > 0) {
        offsetx = limitx * nn;

        const reqData = await axios({
          method: "get",

          url:
            mythis.$root.apiHost +
            "api/vstargetsales?offset=" +
            offsetx +
            "&limit=" +
            limitx,
        });

        console.log(reqData);

        const resData = reqData.data;

        console.log(resData.results.length);

        if (resData.results.length == 0) {
          count = 0;
        }
        console.log(resData, "wow");
        Object.keys(resData.results).forEach(function (key) {
          const countries_x = {
            nomor: nomor_x,

            yop: resData.results[key].yop,
            mop: resData.results[key].mop,
            distcode: resData.results[key].distcode,
            brandcode: "'" + resData.results[key].brandcode, // Menambahkan tanda kutip tunggal
            brandname: resData.results[key].brandname, // Menambahkan tanda kutip tunggal
            sales: resData.results[key].sales,
            target: resData.results[key].target,
            achievement: resData.results[key].achievement,
          };

          mythis.data_x_excel[baris_excel] = countries_x;

          br_pdf++;

          baris_excel++;

          nomor_x++;

          ////////////////////////////////////////////////////////

          ////////////////////////////////////////////////////////
        });

        nn = nn + 1;

        if (resData.count < resData.nomorBaris) {
          count = 0;
        }

        if (nn >= 100) {
          count = 0;
        }
      }

      baris_excel++;

      //Penutup Excel

      baris_excel++;

      var countries_x = {
        nomor: "",

        nama: "Print Date",

        nik: mythis.formatDate(new Date()),
      };

      mythis.data_x_excel[baris_excel] = countries_x;

      mythis.json_data = mythis.data_x_excel;

      mythis.flagDownloadXLS = 1;

      var a = new Date().toLocaleString("en-GB");

      mythis.nama_excelnya = "MASTER_VSTARGETSALES_" + a + ".xls";

      mythis.nama_sheetnya = mythis.nama_excelnya;

      mythis.$root.stopLoading();
    },

    download_excel_xyz() {},

    async startDownload() {
      await this.getDataExportExcel();
    },

    finishDownload() {},
    mySelectEvent() {
      this.todo.roles = this.tmp.cboRoles.code;
    },
    resetForm() {
      var mythis = this;
      Object.keys(mythis.errorField).forEach(function (key) {
        mythis.errorField[key] = false;
        mythis.todo[key] = "";
        //mythis.todo2[key] = "";
      });
      mythis.errorList = "";
    },
    refreshTable() {
      var mythis = this;
      mythis.status_table = false;
      //////////////////////////////
      $("#wrapper2").remove();
      var e = $('<div id="wrapper2"></div>');
      $("#box").append(e);
      this.getTable();
      //////////////////////////////
    },

    saveTodoBulky() {
      var mythis = this;

      Swal.fire({
        title: "Create Master Target vs Sales Bulky",
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          /////////////////////////////////////////////////////////////////////
          // mythis.$root.presentLoading();
          // mythis.$root.flagButtonLoading = true;
          // const AuthStr = "bearer " + localStorage.getItem("token");
          // const config = {
          //   headers: {
          //     Authorization: AuthStr,
          //   },
          // };
          const config = "";
          var url = mythis.$root.apiHost + "api/targetpenjualanBulky";
          axios
            .post(
              url,
              {
                csv: mythis.csv,
                userid: 1,
              },
              config
            )
            .then((res) => {
              Swal.fire("Created!", res.data.message, "success");
              mythis.resetForm();
              mythis.csv = null;
              location.reload();
              // mythis.$root.stopLoading();
              // mythis.$root.flagButtonLoading = false;
              // mythis.resetForm();G
              // mythis.show_modal();
              // mythis.refreshTable();
            })
            .catch(function (error) {
              mythis.$root.flagButtonLoading = false;
              if (error.response) {
                //console.log(error.response.data);
                if (error.response.status == 422) {
                  mythis.errorList = error.response.data;
                  // mythis.$root.loader = false;
                  if (Object.keys(mythis.errorList).length > 0) {
                    //refresh semua menjadi false
                    Object.keys(mythis.errorField).forEach(function (key) {
                      mythis.errorField[key] = false;
                    });
                    //membuat jika error jadi true
                    Object.keys(mythis.errorList).forEach(function (key) {
                      toast.error(mythis.errorList[key], { theme: "colored" });

                      // const myArray = key.split(".");
                      // mythis.errorField[myArray[1]] = true;
                      mythis.errorField[key] = true;
                    });
                  }
                } else {
                  toast.error(error.response.data.message, {
                    theme: "colored",
                  });
                }
              } else if (error.request) {
                console.log(error.request);
              } else {
                console.log("Error", error.message);
              }
            });
        }
      });
    },
    saveTodo() {
      var mythis = this;

      Swal.fire({
        title: "Create Master TARGET VS SALES",
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          /////////////////////////////////////////////////////////////////////
          // mythis.$root.presentLoading();
          mythis.$root.flagButtonLoading = true;
          // const AuthStr = "bearer " + localStorage.getItem("token");
          // const config = {
          //   headers: {
          //     Authorization: AuthStr,
          //   },
          // };
          const config = "";
          var url = mythis.$root.apiHost + "api/targetpenjualan";
          axios
            .post(
              url,
              {
                yop: mythis.todo.yop,
                mop: mythis.todo.mop,
                distcode: mythis.todo.distcode,
                brandcode: mythis.todo.brandcode,
                brandname: mythis.todo.brandname,
                sales: mythis.todo.sales,
                target: mythis.todo.target,
                achievement: mythis.todo.achievement,
                userid: mythis.userid,
              },
              config
            )
            .then((res) => {
              Swal.fire("Created!", res.data.message, "success");
              //mythis.$root.stopLoading();
              mythis.$root.flagButtonLoading = false;
              mythis.resetForm();
              mythis.show_modal();
              mythis.refreshTable();
            })
            .catch(function (error) {
              mythis.$root.flagButtonLoading = false;
              if (error.response) {
                //console.log(error.response.data);
                if (error.response.status == 422) {
                  mythis.errorList = error.response.data;
                  // mythis.$root.loader = false;
                  if (Object.keys(mythis.errorList).length > 0) {
                    //refresh semua menjadi false
                    Object.keys(mythis.errorField).forEach(function (key) {
                      mythis.errorField[key] = false;
                    });
                    //membuat jika error jadi true
                    Object.keys(mythis.errorList).forEach(function (key) {
                      toast.error(mythis.errorList[key], { theme: "colored" });

                      // const myArray = key.split(".");
                      // mythis.errorField[myArray[1]] = true;
                      mythis.errorField[key] = true;
                    });
                  }
                } else {
                  toast.error(error.response.data.message, {
                    theme: "colored",
                  });
                }
              } else if (error.request) {
                console.log(error.request);
              } else {
                console.log("Error", error.message);
              }
            });
          /////////////////////////////////////////////////////////////////////
        }
      });
    },
    show_modal() {
      this.modal = !this.modal;
      if (this.modal == false) {
        this.flagButtonAdd = true;
        this.resetForm();
      }
    },
    async jqueryDelEdit() {
      const mythis = this;
      $(document).on("click", "#editData", async function () {
        let id = $(this).data("id");
        await mythis.getData(id);
        mythis.show_modal();
      });
      $(document).on("click", "#deleteData", function () {
        let id = $(this).data("id");
        mythis.deleteTodo(id);
      });
    },
    getTable() {
      var mythis = this;
      this.grid = new Grid();
      this.grid.updateConfig({
        // language: idID,
        pagination: {
          limit: mythis.$root.pagingTabel1,
          server: {
            url: (prev, page, limit) =>
              `${prev}${prev.includes("?") ? "&" : "?"}limit=${limit}&offset=${
                page * limit
              }`,
          },
        },
        search: {
          server: {
            url: (prev, keyword) => `${prev}?search=${keyword}`,
          },
        },
        columns: [
          { id: "id", name: "ID", hidden: true },
          { id: "no", name: "No" },
          { id: "yop", name: "YOP" },
          { id: "mop", name: "MOP" },
          { id: "brandcode", name: "BRAND CODE" },
          { id: "brandname", name: "BRAND NAME" },
          { id: "distcode", name: "DISTCODE" },
          { id: "sales", name: "SALES" },
          { id: "target", name: "TARGET" },
          
          {
            id: "achievement",
            name: "ACHIEVEMENT",
             formatter: (cell) => {
             console.log("Achievement value:", cell);// Tambahkan log untuk debugging
             return html(`${cell.props.content}%`) // Menampilkan dengan simbol persen
            },
          },
        ],
        style: {
          table: {
            border: "1px solid #ccc",
            width: "auto",
            "min-width": "100%",
          },
          th: {
            "background-color": "rgba(0, 55, 255, 0.1)",
            color: "#000",
            "border-bottom": "1px solid #ccc",
            "text-align": "center",
          },
          td: {
            "text-align": "center",
          },
        },
        server: {
          url: this.$root.apiHost + "api/vstargetsales",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.yop}</span>`),
              html(`<span class="pull-left">${card.mop}</span>`),
              html(`<span class="pull-left">${card.brandcode}</span>`),
              html(`<span class="pull-left">${card.brandname}</span>`),
              html(`<span class="pull-left">${card.distcode}</span>`),
              html(`<span class="pull-right">${new Intl.NumberFormat('en-US').format(card.sales)}</span>`),
              html(`<span class="pull-right">${new Intl.NumberFormat('en-US').format(card.target)}</span>`),
              html(`<span class="pull-left">${card.achievement}</span>`),
            ]),
          total: (data) => data.count,
          handle: (res) => {
            // no matching records found
            if (res.status === 404) return { data: [] };
            if (res.ok) return res.json();

            throw Error("oh no :(");
          },
        },
      });
      // DOM instead of vue selector because we are using vanilla JS
      this.grid.render(document.getElementById("wrapper2"));
      this.number = 0;

      $(document).off("click", "#editData");
      $(document).off("click", "#deleteData");
      mythis.jqueryDelEdit();
      this.status_table = true;
    },
    deleteTodo(id) {
      var mythis = this;
      Swal.fire({
        title: "Delete Data",
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          mythis.$root.presentLoading();
          const config = {
            // const AuthStr = "bearer " + localStorage.getItem("token");
            // const config = {
            //   headers: {
            //     Authorization: AuthStr,
            //   },
            data: {
              fileUpload: "form satuan",
              userid: mythis.userid,
            },
          };
          axios
            .delete(mythis.$root.apiHost + `api/targetpenjualan/${id}`, config)
            .then((res) => {
              //console.log(res.data.data);
              // /Swal.fire("Terhapus!", "Data telah sukses dihapus", "success");
              Swal.fire("Deleted!", "Data has been deleted", "success");

              mythis.$root.stopLoading();
              mythis.refreshTable();
              mythis.resetForm();
            });
        }
      });
    },
    editTodo() {
      var mythis = this;
      mythis.$root.flagButtonLoading = true;
      // const AuthStr = "bearer " + localStorage.getItem("token");

      //   headers: {
      //     Authorization: AuthStr,
      //   },
      // };
      const config = "";
      axios
        .put(
          mythis.$root.apiHost + "api/targetpenjualan/" + mythis.todo.id,
          {
            brandcode: mythis.todo.brandcode,
            brandname: mythis.todo.brandname,
            sales: mythis.todo.sales,
            target: mythis.todo.target,
            yop: mythis.todo.yop,
            mop: mythis.todo.mop,
            distcode: mythis.todo.distcode,
            achievement: mythis.todo.achievement,

            userid: mythis.userid,
          },
          config
        )
        .then((res) => {
          //console.log(res);
          //alert(res.data.message);
          Swal.fire("Updated!", res.data.message, "success");
          mythis.$root.flagButtonLoading = false;
          mythis.resetForm();
          mythis.show_modal();
          mythis.refreshTable();
        })
        .catch(function (error) {
          mythis.$root.flagButtonLoading = false;
          if (error.response) {
            //console.log(error.response.data);
            if (error.response.status == 422) {
              mythis.errorList = error.response.data;
              mythis.$root.loader = false;
              if (Object.keys(mythis.errorList).length > 0) {
                //refresh semua menjadi false
                Object.keys(mythis.errorField).forEach(function (key) {
                  mythis.errorField[key] = false;
                });
                //membuat jika error jadi true
                Object.keys(mythis.errorList).forEach(function (key) {
                  toast.error(mythis.errorList[key], { theme: "colored" });

                  // const myArray = key.split(".");
                  // mythis.errorField[myArray[1]] = true;
                  mythis.errorField[key] = true;
                });
              }
            } else {
              toast.error(error.response.data.message, {
                theme: "colored",
              });
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
    async getData(id) {
      var mythis = this;
      mythis.flagButtonAdd = false;
      mythis.$root.presentLoading();
      mythis.todo = {};
      // const AuthStr = "bearer " + localStorage.getItem("token");
      const config = {
        // headers: {
        //   Authorization: AuthStr,
        // },
      };
      await axios
        .get(mythis.$root.apiHost + `api/targetpenjualan/${id}`, config)
        .then(async (res) => {
          //console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.brandcode = res.data.data.brandcode;
          mythis.todo.brandname = res.data.data.brandname;
          mythis.todo.sales = res.data.data.sales;
          mythis.todo.target = res.data.data.target;
          mythis.todo.yop = res.data.data.yop;
          mythis.todo.mop = res.data.data.mop;
          mythis.todo.distcode = res.data.data.distcode;
          mythis.todo.achievement = res.data.data.achievement;

          document.getElementById("inputA").focus(); // sets the focus on the input

          mythis.$root.stopLoading();
        });
    },
  },
};
</script>

<style scoped>
.input-error {
  border: red 1px solid;
}
</style>
