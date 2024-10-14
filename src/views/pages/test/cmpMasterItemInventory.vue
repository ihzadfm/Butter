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
                  <label for="item_code">Item Code</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="Item Code"
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
                  <label for="whs_code">Warehouse Code</label>
                  <CmpInputText
                    type="text"
                    placeholder="Warehouse Code"
                    v-model="todo.whs_code"
                    :class="
                      errorField.whs_code
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
            <div class="col-md-6">
              <div class="form-group">
                <label for="on_hand">On Hand</label>
                <CmpInputText
                  type="number"
                  placeholder="On Hand"
                  v-model="todo.on_hand"
                  :class="
                    errorField.on_hand
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="on_order">On Order</label>
                <CmpInputText
                  type="number"
                  placeholder="On Order"
                  v-model="todo.on_order"
                  :class="
                    errorField.on_order
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="min_stock">Min Stock</label>
                <CmpInputText
                  type="number"
                  placeholder="Min Stock"
                  v-model="todo.min_stock"
                  :class="
                    errorField.min_stock
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="max_stock">Max Stock</label>
                <CmpInputText
                  type="number"
                  placeholder="Max Stock"
                  v-model="todo.max_stock"
                  :class="
                    errorField.max_stock
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="Min order">Min Order</label>
                <CmpInputText
                  type="number"
                  placeholder="Min Order"
                  v-model="todo.min_order"
                  :class="
                    errorField.min_order
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="reorder_qty">Reorder Quantity</label>
                <CmpInputText
                  type="number"
                  placeholder="Reorder Quantity"
                  v-model="todo.reorder_qty"
                  :class="
                    errorField.reorder_qty
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
          </div>

          <div class="row">
            <!-- On Priority Checkbox -->
            <div class="col-md-6">
              <div class="form-group">
                <label for="on_priority">On Priority</label>
                <input
                  type="checkbox"
                  v-model="todo.on_priority"
                  :class="
                    errorField.on_priority
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>

            <!-- Flag Active Checkbox -->
            <div class="col-md-6">
              <div class="form-group">
                <label for="flag_active">Active</label>
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
                  todo.whs_code == null ||
                  todo.whs_code == ''
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
                  todo.whs_code == null ||
                  todo.whs_code == ''
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

export default {
  components: {
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
        item_code: false,
        whs_code: false,
        on_hand: false,
        on_order: false,
        min_stock: false,
        max_stock: false,
        min_order: false,
        reorder_qty: false,
        on_priority: false,
        flag_active: false,
      },

      userid: 0,
      status_table: false,

      modal: false,

      todo: {
        item_code: "",
        whs_code: "",
        on_hand: null,
        on_order: null,
        min_stock: null,
        max_stock: null,
        min_order: null,
        reorder_qty: null,
        on_priority: false,
        flag_active: true,
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
      mythis.todo.on_priority = false;
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
        title: "Create Item Inventory",
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
          var url = mythis.$root.apiHost + "api/m_item_inventory";
          axios
            .post(
              url,
              {
                item_code: mythis.todo.item_code,
                whs_code: mythis.todo.whs_code,
                on_hand: mythis.todo.on_hand,
                on_order: mythis.todo.on_order,
                min_stock: mythis.todo.min_stock,
                max_stock: mythis.todo.max_stock,
                min_order: mythis.todo.min_order,
                reorder_qty: mythis.todo.reorder_qty,
                on_priority: mythis.todo.on_priority,
                flag_active: mythis.todo.flag_active,
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
          { name: "ID", hidden: true },
          "No",
          "Item Code",
          "Warehouse Code",
          "On Hand",
          "On Order",
          "Min Stock",
          "Max Stock",
          "Min Order",
          "Reorder Quantity",
          "Priority",
          "Active",
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
          url: this.$root.apiHost + "api/m_item_inventory",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.item_code}</span>`),
              html(`<span class="pull-left">${card.whs_code}</span>`),
              html(`<span class="pull-left">${card.on_hand}</span>`),
              html(`<span class="pull-left">${card.on_order}</span>`),
              html(`<span class="pull-left">${card.min_stock}</span>`),
              html(`<span class="pull-left">${card.max_stock}</span>`),
              html(`<span class="pull-left">${card.min_order}</span>`),
              html(`<span class="pull-left">${card.reorder_qty}</span>`),
              html(
                `<span class="pull-left">${
                  card.on_priority ? "Yes" : "No"
                }</span>`
              ),
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
            .delete(mythis.$root.apiHost + `api/m_item_inventory/${id}`, config)
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
          mythis.$root.apiHost + "api/m_item_inventory/" + mythis.todo.id,
          {
            item_code: mythis.todo.item_code,
            whs_code: mythis.todo.whs_code,
            on_hand: mythis.todo.on_hand,
            on_order: mythis.todo.on_order,
            min_stock: mythis.todo.min_stock,
            max_stock: mythis.todo.max_stock,
            min_order: mythis.todo.min_order,
            reorder_qty: mythis.todo.reorder_qty,
            on_priority: mythis.todo.on_priority,
            flag_active: mythis.todo.flag_active,
            created_by: mythis.todo.created_by,
            updated_by: mythis.todo.updated_by,
            deleted_by: mythis.todo.deleted_by,
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
        .get(mythis.$root.apiHost + `api/m_item_inventory/${id}`, config)
        .then(async (res) => {
          mythis.todo.id = id;
          mythis.todo.item_code = res.data.data.item_code;
          mythis.todo.whs_code = res.data.data.whs_code;
          mythis.todo.on_hand = res.data.data.on_hand;
          mythis.todo.on_order = res.data.data.on_order;
          mythis.todo.min_stock = res.data.data.min_stock;
          mythis.todo.max_stock = res.data.data.max_stock;
          mythis.todo.min_order = res.data.data.min_order;
          mythis.todo.reorder_qty = res.data.data.reorder_qty;
          mythis.todo.on_priority = res.data.data.on_priority;
          mythis.todo.flag_active = res.data.data.flag_active;
          mythis.todo.created_by = res.data.data.created_by;
          mythis.todo.updated_by = res.data.data.updated_by;
          mythis.todo.deleted_by = res.data.data.deleted_by;
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
