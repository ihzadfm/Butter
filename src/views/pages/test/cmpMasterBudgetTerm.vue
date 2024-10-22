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
                  <label for="example">Kode Beban</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="kode beban"
                    v-model="todo.kodebeban"
                    :class="
                      errorField.kodebeban
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Kode Divisi</label>
                  <CmpInputText
                    type="text"
                    placeholder="kode divisi"
                    v-model="todo.kodedivisi"
                    :class="
                      errorField.kodedivisi
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
                  <label for="example-nf-email">Expense</label>
                  <CmpInputText
                    type="text"
                    placeholder="expense"
                    v-model="todo.expense"
                    :class="
                      errorField.expense
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Expense Group</label>
                  <CmpInputText
                    type="text"
                    placeholder="expense group"
                    v-model="todo.expensegroup"
                    :class="
                      errorField.expensegroup
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
                  <label for="example-nf-email">Group Beban</label>
                  <CmpInputText
                    type="text"
                    placeholder="group beban"
                    v-model="todo.groupbeban"
                    :class="
                      errorField.groupbeban
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Group Cost Center</label>
                  <CmpInputText
                    type="text"
                    placeholder="group cost center"
                    v-model="todo.groupcostcenter"
                    :class="
                      errorField.groupcostcenter
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Total Final</label>
                  <CmpInputText
                    type="text"
                    placeholder="total final"
                    v-model="todo.totalfinal"
                    :class="
                      errorField.totalfinal
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Total</label>
                <CmpInputText
                  type="text"
                  placeholder="total"
                  v-model="todo.total"
                  :class="
                    errorField.total
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
          </div>

          <!-- Monthly Fields (Jan - Dec) -->
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">January</label>
                  <CmpInputText
                    type="text"
                    placeholder="January"
                    v-model="todo.jan"
                    :class="
                      errorField.jan
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">February</label>
                  <CmpInputText
                    type="text"
                    placeholder="February"
                    v-model="todo.feb"
                    :class="
                      errorField.feb
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">March</label>
                  <CmpInputText
                    type="text"
                    placeholder="March"
                    v-model="todo.mar"
                    :class="
                      errorField.mar
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">April</label>
                  <CmpInputText
                    type="text"
                    placeholder="April"
                    v-model="todo.apr"
                    :class="
                      errorField.apr
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">May</label>
                  <CmpInputText
                    type="text"
                    placeholder="May"
                    v-model="todo.mei"
                    :class="
                      errorField.mei
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">June</label>
                  <CmpInputText
                    type="text"
                    placeholder="June"
                    v-model="todo.jun"
                    :class="
                      errorField.jun
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">July</label>
                  <CmpInputText
                    type="text"
                    placeholder="July"
                    v-model="todo.jul"
                    :class="
                      errorField.jul
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">August</label>
                  <CmpInputText
                    type="text"
                    placeholder="August"
                    v-model="todo.ags"
                    :class="
                      errorField.ags
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">September</label>
                  <CmpInputText
                    type="text"
                    placeholder="September"
                    v-model="todo.sep"
                    :class="
                      errorField.sep
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">October</label>
                  <CmpInputText
                    type="text"
                    placeholder="October"
                    v-model="todo.okt"
                    :class="
                      errorField.okt
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">November</label>
                  <CmpInputText
                    type="text"
                    placeholder="November"
                    v-model="todo.nop"
                    :class="
                      errorField.nop
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="example-nf-email">December</label>
                  <CmpInputText
                    type="text"
                    placeholder="December"
                    v-model="todo.des"
                    :class="
                      errorField.des
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Realization fields (n1 - n12) and Total Realization -->
          <!-- Realization fields (n1 - n12) and Total Realization -->
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 1</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 1"
                  v-model="todo.realizationn1"
                  :class="
                    errorField.realizationn1
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 2</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 2"
                  v-model="todo.realizationn2"
                  :class="
                    errorField.realizationn2
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 3</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 3"
                  v-model="todo.realizationn3"
                  :class="
                    errorField.realizationn3
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 4</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 4"
                  v-model="todo.realizationn4"
                  :class="
                    errorField.realizationn4
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 5</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 5"
                  v-model="todo.realizationn5"
                  :class="
                    errorField.realizationn5
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 6</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 6"
                  v-model="todo.realizationn6"
                  :class="
                    errorField.realizationn6
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 7</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 7"
                  v-model="todo.realizationn7"
                  :class="
                    errorField.realizationn7
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 8</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 8"
                  v-model="todo.realizationn8"
                  :class="
                    errorField.realizationn8
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 9</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 9"
                  v-model="todo.realizationn9"
                  :class="
                    errorField.realizationn9
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 10</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 10"
                  v-model="todo.realizationn10"
                  :class="
                    errorField.realizationn10
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 11</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 11"
                  v-model="todo.realizationn11"
                  :class="
                    errorField.realizationn11
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Realization 12</label>
                <CmpInputText
                  type="text"
                  placeholder="realization 12"
                  v-model="todo.realizationn12"
                  :class="
                    errorField.realizationn12
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <!-- Repeat for realizationn3 to realizationn12 -->
            <!-- ... -->
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Total Realization</label>
                <CmpInputText
                  type="text"
                  placeholder="total realization"
                  v-model="todo.totalrealization"
                  :class="
                    errorField.totalrealization
                      ? 'form-control input-lg input-error'
                      : 'form-control input-lg'
                  "
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="example-nf-email">Year</label>
                <CmpInputText
                  type="text"
                  placeholder="year"
                  v-model="todo.year"
                  :class="
                    errorField.year
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
                  this.todo.kodebeban == null ||
                  this.todo.kodebeban == '' ||
                  this.todo.q1 == null ||
                  this.todo.q1 == '' ||
                  this.todo.q2 == null ||
                  this.todo.q2 == '' ||
                  this.todo.q3 == null ||
                  this.todo.q3 == '' ||
                  this.todo.q4 == null ||
                  this.todo.q4 == '' ||
                  this.todo.realizationq1 == null ||
                  this.todo.realizationq1 == '' ||
                  this.todo.realizationq2 == null ||
                  this.todo.realizationq2 == '' ||
                  this.todo.realizationq3 == null ||
                  this.todo.realizationq3 == '' ||
                  this.todo.realizationq4 == null ||
                  this.todo.realizationq4 == ''
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
                  this.todo.kodebeban == null ||
                  this.todo.kodebeban == '' ||
                  this.todo.q1 == null ||
                  this.todo.q1 == '' ||
                  this.todo.q2 == null ||
                  this.todo.q2 == '' ||
                  this.todo.q3 == null ||
                  this.todo.q3 == '' ||
                  this.todo.q4 == null ||
                  this.todo.q4 == '' ||
                  this.todo.realizationq1 == null ||
                  this.todo.realizationq1 == '' ||
                  this.todo.realizationq2 == null ||
                  this.todo.realizationq2 == '' ||
                  this.todo.realizationq3 == null ||
                  this.todo.realizationq3 == '' ||
                  this.todo.realizationq4 == null ||
                  this.todo.realizationq4 == ''
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
        kodebeban: false,
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        realizationq1: false,
        realizationq2: false,
        realizationq3: false,
        realizationq4: false,
      },

      userid: 0,
      status_table: false,

      modal: false,

      todo: {
        kodebeban: "",
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        realizationq1: "",
        realizationq2: "",
        realizationq3: "",
        realizationq4: "",
      },
      flagButtonAdd: true,
      csv: null,
      dataImportCsv: {
        kodebeban: {
          label: "kodebeban",
          required: true,
        },
        q1: {
          label: "q1",
          required: true,
        },
        q2: {
          label: "q2",
          required: true,
        },
        q3: {
          label: "q3",
          required: true,
        },
        q4: {
          label: "q4",
          required: true,
        },
        realizationq1: {
          label: "realizationq1",
          required: true,
        },
        realizationq2: {
          label: "realizationq2",
          required: true,
        },
        realizationq3: {
          label: "realizationq3",
          required: true,
        },
        realizationq4: {
          label: "realizationq4",
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
        kodebeban: "kodebeban",
        q1: "q1",
        q2: "q2",
        q3: "q3",
        q4: "q4",
        realizationq1: "realizationq1",
        realizationq2: "realizationq2",
        realizationq3: "realizationq3",
        realizationq4: "realizationq4",
      },
      nama_Worksheet: "Sheet Master Budget Term",
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
            "api/budgetterm?offset=" +
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

        Object.keys(resData.results).forEach(function (key) {
          const countries_x = {
            nomor: nomor_x,
            kodebeban: resData.results[key].kodebeban
              ? resData.results[key].kodebeban
              : "",
            q1: resData.results[key].q1 ? resData.results[key].q1 : "",
            q2: resData.results[key].q2 ? resData.results[key].q2 : "",
            q3: resData.results[key].q3 ? resData.results[key].q3 : "",
            q4: resData.results[key].q4 ? resData.results[key].q4 : "",
            realizationq1: resData.results[key].realizationq1
              ? resData.results[key].realizationq1
              : "",
            realizationq2: resData.results[key].realizationq2
              ? resData.results[key].realizationq2
              : "",
            realizationq3: resData.results[key].realizationq3
              ? resData.results[key].realizationq3
              : "",
            realizationq4: resData.results[key].realizationq4
              ? resData.results[key].realizationq4
              : "",
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

      mythis.nama_excelnya = "MASTER_BUDGET_TERM_" + a + ".xls";

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
        title: "Create Master Budget Bulky",
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
          var url = mythis.$root.apiHost + "api/BudgetMonitoringBulky";
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
              // mythis.resetForm();
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
        title: "Create Master BUDGET",
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
          var url = mythis.$root.apiHost + "api/BudgetMonitoring";
          axios
            .post(
              url,
              {
                KodeBeban: mythis.todo.KodeBeban,
                q1: mythis.todo.q1,
                q2: mythis.todo.q2,
                q3: mythis.todo.q3,
                q4: mythis.todo.q4,
                realizationq1: mythis.todo.realizationq1,
                realizationq2: mythis.todo.realizationq2,
                realizationq3: mythis.todo.realizationq3,
                realizationq4: mythis.todo.realizationq4,
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
          "KODE BEBAN",
          "Q1", // Kuartal 1 = Jan + Feb + Mar
          "REALIZATION Q1",
          "Q2", // Kuartal 2 = Apr + Mei + Jun
          "REALIZATION Q2",
          "Q3", // Kuartal 3 = Jul + Ags + Sep
          "REALIZATION Q3",
          "Q4", // Kuartal 4 = Okt + Nop + Des
           // Realisasi Kuartal 1 = Realization N1 + N2 + N3
           // Realisasi Kuartal 2 = Realization N4 + N5 + N6
           // Realisasi Kuartal 3 = Realization N7 + N8 + N9
          "REALIZATION Q4",

        //   {
        //     name: "Action",
        //     formatter: (_, row) =>
        //       mythis.$root.accessRoles[mythis.access_page].update &&
        //       mythis.$root.accessRoles[mythis.access_page].delete
        //         ? html(
        //             `
        //         <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa fa-pencil-square-o"></i></button>
        //         &nbsp;&nbsp;&nbsp;
        //         <button data-id="${row.cells[0].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa fa-trash-o"></i></button>
        //       `
        //           )
        //         : mythis.$root.accessRoles[mythis.access_page].update
        //         ? html(
        //             `
        //         <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa fa-pencil-square-o"></i></button>`
        //           )
        //         : mythis.$root.accessRoles[mythis.access_page].delete
        //         ? html(`&nbsp;&nbsp;&nbsp;
        //         <button data-id="${row.cells[0].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa fa-trash-o"></i></button>`)
        //         : ``,
        //   },
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
          url: this.$root.apiHost + "api/budgetterm",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.kodebeban}</span>`),
              // Kuartal 1 (Jan + Feb + Mar)
              // Kuartal 2 (Apr + Mei + Jun)
              html(`<span class="pull-left">${new Intl.NumberFormat('en-US').format(card.q1)}</span>`),  // Kuartal 1 (Jan + Feb + Mar)
              html(`<span class="pull-left">${new Intl.NumberFormat('en-US').format(card.realizationq1)}</span>`), // Realisasi Kuartal 1 (N1 + N2 + N3)
              html(`<span class="pull-left">${new Intl.NumberFormat('en-US').format(card.q2)}</span>`),  // Kuartal 2 (Apr + Mei + Jun)
              html(`<span class="pull-left">${new Intl.NumberFormat('en-US').format(card.realizationq2)}</span>`), // Realisasi Kuartal 2 (N4 + N5 + N6)
              html(`<span class="pull-left">${new Intl.NumberFormat('en-US').format(card.q3)}</span>`),  // Kuartal 3 (Jul + Ags + Sep)
              html(`<span class="pull-left">${new Intl.NumberFormat('en-US').format(card.realizationq3)}</span>`), // Realisasi Kuartal 3 (N7 + N8 + N9)
              html(`<span class="pull-left">${new Intl.NumberFormat('en-US').format(card.q4)}</span>`),  // Kuartal 4 (Okt + Nop + Des)
              html(`<span class="pull-left">${new Intl.NumberFormat('en-US').format(card.realizationq4)}</span>`), // Realisasi Kuartal 4 (N10 + N11 + N12)

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
            .delete(mythis.$root.apiHost + `api/BudgetMonitoring/${id}`, config)
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
          mythis.$root.apiHost + "api/BudgetMonitoring/" + mythis.todo.id,
          {
            kodebeban: mythis.todo.kodebeban,
            q1: mythis.todo.q1, // Kuartal 1 (Jan + Feb + Mar)
            q2: mythis.todo.q2, // Kuartal 2 (Apr + Mei + Jun)
            q3: mythis.todo.q3, // Kuartal 3 (Jul + Ags + Sep)
            q4: mythis.todo.q4, // Kuartal 4 (Okt + Nop + Des)
            realizationq1: mythis.todo.realizationq1, // Realisasi Kuartal 1 (Realization N1 + N2 + N3)
            realizationq2: mythis.todo.realizationq2, // Realisasi Kuartal 2 (Realization N4 + N5 + N6)
            realizationq3: mythis.todo.realizationq3, // Realisasi Kuartal 3 (Realization N7 + N8 + N9)
            realizationq4: mythis.todo.realizationq4,
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
        .get(mythis.$root.apiHost + `api/BudgetMonitoring/${id}`, config)
        .then(async (res) => {
          mythis.todo.id = id;
          mythis.todo.kodebeban = res.data.data.kodebeban;
          mythis.todo.q1 = res.data.data.q1; // Data untuk Q1 (Jan + Feb + Mar)
          mythis.todo.q2 = res.data.data.q2; // Data untuk Q2 (Apr + Mei + Jun)
          mythis.todo.q3 = res.data.data.q3; // Data untuk Q3 (Jul + Ags + Sep)
          mythis.todo.q4 = res.data.data.q4; // Data untuk Q4 (Okt + Nop + Des)
          mythis.todo.realizationq1 = res.data.data.realizationq1; // Realisasi Q1 (Realization N1 + N2 + N3)
          mythis.todo.realizationq2 = res.data.data.realizationq2; // Realisasi Q2 (Realization N4 + N5 + N6)
          mythis.todo.realizationq3 = res.data.data.realizationq3; // Realisasi Q3 (Realization N7 + N8 + N9)
          mythis.todo.realizationq4 = res.data.data.realizationq4;

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
