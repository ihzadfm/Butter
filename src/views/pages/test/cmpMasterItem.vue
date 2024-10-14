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
          <pre>{{ todo }}</pre>
          <!-- Wizards Row -->
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Item Code</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="item_code"
                    v-model="todo.item_code"
                    :class="
                      errorField.item_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    :disabled="!flagButtonAdd"
                    @input="
                      (val) => (todo.item_code = todo.item_code.toUpperCase())
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Item Name</label>
                  <CmpInputText
                    type="text"
                    placeholder="item_name"
                    v-model="todo.item_name"
                    :class="
                      errorField.item_name
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.item_name = todo.item_name.toUpperCase())
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
                  <label for="example-nf-email">Sales Item</label>
                  <input
                    type="checkbox"
                    v-model="todo.sales_item"
                    :class="
                      errorField.sales_item
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Purch Item</label>
                  <input
                    type="checkbox"
                    v-model="todo.purch_item"
                    :class="
                      errorField.purch_item
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Return Item</label>
                  <input
                    type="checkbox"
                    v-model="todo.return_item"
                    :class="
                      errorField.return_item
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
            </div>

            <!-- Add flag_active Checkbox -->
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Active Item</label>
                <input
                  type="checkbox"
                  v-model="todo.flag_active"
                  :class="
                    errorField.flag_active
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <!-- Add fields for code_bars, mnft_code, uom1, uom2, uom3, uom4, and obj_type -->
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Barcode</label>
                <CmpInputText
                  type="text"
                  placeholder="Barcode"
                  v-model="todo.code_bars"
                  :class="
                    errorField.code_bars
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Manufacturer Code</label>
                <CmpInputText
                  type="text"
                  placeholder="Manufacturer Code"
                  v-model="todo.mnft_code"
                  :class="
                    errorField.mnft_code
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">UOM 1</label>
                <CmpInputText
                  type="number"
                  placeholder="Unit of Measure 1"
                  v-model="todo.uom1"
                  :class="
                    errorField.uom1
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">UOM 2</label>
                <CmpInputText
                  type="number"
                  placeholder="Unit of Measure 2"
                  v-model="todo.uom2"
                  :class="
                    errorField.uom2
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">UOM 3</label>
                <CmpInputText
                  type="number"
                  placeholder="Unit of Measure 3"
                  v-model="todo.uom3"
                  :class="
                    errorField.uom3
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">UOM 4</label>
                <CmpInputText
                  type="number"
                  placeholder="Unit of Measure 4"
                  v-model="todo.uom4"
                  :class="
                    errorField.uom4
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Object Type</label>
                <CmpInputText
                  type="number"
                  placeholder="Object Type"
                  v-model="todo.obj_type"
                  :class="
                    errorField.obj_type
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
              <!-- Add flag_active Checkbox -->
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Active Item</label>
                  <input
                    type="checkbox"
                    v-model="todo.flag_active"
                    :class="
                      errorField.flag_active
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
                  todo.item_code == null ||
                  todo.item_code == '' ||
                  todo.item_name == null ||
                  todo.item_name == ''
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
                  todo.item_code == null ||
                  todo.item_code == '' ||
                  todo.item_name == null ||
                  todo.item_name == ''
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
        <vue-csv-import v-model="csv" :fields="dataImportCsv">
          <vue-csv-toggle-headers></vue-csv-toggle-headers>
          <vue-csv-errors></vue-csv-errors>
          <vue-csv-input></vue-csv-input>
          <vue-csv-map></vue-csv-map>
        </vue-csv-import>
        <button
          v-if="status_table && $root.accessRoles[access_page].create"
          class="btn btn-sm btn-primary pull-right"
          @click="show_modal()"
        >
          ADD DATA
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
    // CmpSelect2,
    // LoadingX,
    // CmpInputText,
    // CmpInputText,
  },
  data() {
    return {
      access_page: this.$root.decryptData(localStorage.getItem("halaman")),
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      grid: new Grid(),
      // grid2: new Grid(),
      errorField: {
        item_name: false,
        item_code: false,
        return_item: false,
        purch_item: false,
        sales_item: false,
        flag_active: false,
        code_bars: false,
        mnft_code: false,
        uom1: false,
        uom2: false,
        uom3: false,
        uom4: false,
        obj_type: false,
      },

      userid: 0,
      status_table: false,

      modal: false,

      todo: {
        item_code: "",
        item_name: "",
        sales_item: false,
        purch_item: false,
        return_item: false,
        flag_active: true, // default flag_active
        code_bars: "",
        mnft_code: "",
        uom1: null,
        uom2: null,
        uom3: null,
        uom4: null,
        obj_type: null,
      },

      flagButtonAdd: true,
    };
  },
  async mounted() {
    // await this.$root.refreshToken(localStorage.getItem("token"));
    this.getTable();
    this.userid = this.$root.get_id_user(localStorage.getItem("unique"));
  },
  methods: {
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
      mythis.todo.flag_active = true;
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
    saveTodo() {
      var mythis = this;

      Swal.fire({
        title: "Create Master Item",
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
          var url = mythis.$root.apiHost + "api/m_item";
          axios
            .post(
              url,
              {
                item_name: mythis.todo.item_name,
                item_code: mythis.todo.item_code,
                sales_item: mythis.todo.sales_item,
                return_item: mythis.todo.return_item,
                purch_item: mythis.todo.purch_item,
                flag_active: mythis.todo.flag_active,
                code_bars: mythis.todo.code_bars,
                mnft_code: mythis.todo.mnft_code,
                uom1: mythis.todo.uom1,
                uom2: mythis.todo.uom2,
                uom3: mythis.todo.uom3,
                uom4: mythis.todo.uom4,
                obj_type: mythis.todo.obj_type,
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
              //NOTIFIKASI SUKSES
              mythis.$root.sendNotifFirebase("SUKSES", "Body");
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
          { name: "ID", hidden: true },
          "No",
          "Item Code",
          "Item Name",
          "Sales Item",
          "Purch Item",
          "Return Item",
          "Active Item",
          {
            name: "Action",
            formatter: (_, row) =>
              mythis.$root.accessRoles[mythis.access_page].update &&
              mythis.$root.accessRoles[mythis.access_page].delete
                ? html(
                    `
                <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa fa-pencil-square-o"></i></button>
                &nbsp;&nbsp;&nbsp;
                <button data-id="${row.cells[0].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa fa-trash-o"></i></button>
              `
                  )
                : mythis.$root.accessRoles[mythis.access_page].update
                ? html(
                    `
                <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa fa-pencil-square-o"></i></button>`
                  )
                : mythis.$root.accessRoles[mythis.access_page].delete
                ? html(`&nbsp;&nbsp;&nbsp;
                <button data-id="${row.cells[0].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa fa-trash-o"></i></button>`)
                : ``,
          },
        ],
        style: {
          table: {
            border: "1px solid #ccc",
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
          url: this.$root.apiHost + "api/m_item",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.item_name}</span>`),
              html(`<span class="pull-left">${card.item_code}</span>`),
              html(`<span class="pull-left">${card.sales_item}</span>`),
              html(`<span class="pull-left">${card.purch_item}</span>`),
              html(`<span class="pull-left">${card.return_item}</span>`),
              html(
                `<span class="pull-left">${
                  card.flag_active ? "Yes" : "No"
                }</span>`
              ),
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
            .delete(mythis.$root.apiHost + `api/m_item/${id}`, config)
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
          mythis.$root.apiHost + "api/m_item/" + mythis.todo.id,
          {
            item_name: mythis.todo.item_name,
            item_code: mythis.todo.item_code,
            sales_item: mythis.todo.sales_item,
            return_item: mythis.todo.return_item,
            purch_item: mythis.todo.purch_item,
            flag_active: mythis.todo.flag_active,
            code_bars: mythis.todo.code_bars,
            mnft_code: mythis.todo.mnft_code,
            uom1: mythis.todo.uom1,
            uom2: mythis.todo.uom2,
            uom3: mythis.todo.uom3,
            uom4: mythis.todo.uom4,
            obj_type: mythis.todo.obj_type,
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
        .get(mythis.$root.apiHost + `api/m_item/${id}`, config)
        .then(async (res) => {
          //console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.item_name = res.data.data.item_name;
          mythis.todo.item_code = res.data.data.item_code;
          mythis.todo.return_item = res.data.data.return_item;
          mythis.todo.sales_item = res.data.data.sales_item;
          mythis.todo.purch_item = res.data.data.purch_item;
          mythis.todo.flag_active = res.data.data.flag_active;
          mythis.todo.code_bars = res.data.data.code_bars;
          mythis.todo.mnft_code = res.data.data.mnft_code;
          mythis.todo.uom1 = res.data.data.uom1;
          mythis.todo.uom2 = res.data.data.uom2;
          mythis.todo.uom3 = res.data.data.uom3;
          mythis.todo.uom4 = res.data.data.uom4;
          mythis.todo.obj_type = res.data.data.obj_type;
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
