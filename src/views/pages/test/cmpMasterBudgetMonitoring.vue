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
                  todo.KodeBeban == null ||
                  todo.KodeBeban == '' ||
                  todo.KodeDivisi == null ||
                  todo.KodeDivisi == '' ||
                  todo.Expense == null ||
                  todo.Expense == '' ||
                  todo.ExpenseGroup == null ||
                  todo.ExpenseGroup == '' ||
                  todo.GroupBeban == null ||
                  todo.GroupBeban == '' ||
                  todo.GroupCostCenter == null ||
                  todo.GroupCostCenter == '' ||
                  todo.TOTALFINAL == null ||
                  todo.TOTALFINAL == '' ||
                  todo.TOTAL == null ||
                  todo.TOTAL == '' ||
                  todo.JAN == null ||
                  todo.JAN == '' ||
                  todo.FEB == null ||
                  todo.FEB == '' ||
                  todo.MAR == null ||
                  todo.MAR == '' ||
                  todo.APR == null ||
                  todo.APR == '' ||
                  todo.MEI == null ||
                  todo.MEI == '' ||
                  todo.JUN == null ||
                  todo.JUN == '' ||
                  todo.JUL == null ||
                  todo.JUL == '' ||
                  todo.AGS == null ||
                  todo.AGS == '' ||
                  todo.SEP == null ||
                  todo.SEP == '' ||
                  todo.OKT == null ||
                  todo.OKT == '' ||
                  todo.NOP == null ||
                  todo.NOP == '' ||
                  todo.DES == null ||
                  todo.DES == '' ||
todo.RealizationN1 == null ||
todo.RealizationN1 == '' ||
todo.RealizationN2 == null ||
todo.RealizationN2 == '' ||
todo.RealizationN3 == null ||
todo.RealizationN3 == '' ||
todo.RealizationN4 == null ||
todo.RealizationN4 == '' ||
todo.RealizationN5 == null ||
todo.RealizationN5 == '' ||
todo.RealizationN6 == null ||
todo.RealizationN6 == '' ||
todo.RealizationN7 == null ||
todo.RealizationN7 == '' ||
todo.RealizationN8 == null ||
todo.RealizationN8 == '' ||
todo.RealizationN9 == null ||
todo.RealizationN9 == '' ||
todo.RealizationN10 == null ||
todo.RealizationN10 == '' ||
todo.RealizationN11 == null ||
todo.RealizationN11 == '' ||
todo.RealizationN12 == null ||
todo.RealizationN12 == '' ||
todo.TotalRealization == null ||
todo.TotalRealization == '' ||
todo.Year == null ||
todo.Year == ''
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
                  todo.kodebeban == null ||
todo.kodebeban == '' ||
todo.kodedivisi == null ||
todo.kodedivisi == '' ||
todo.expense == null ||
todo.expense == '' ||
todo.expensegroup == null ||
todo.expensegroup == '' ||
todo.groupbeban == null ||
todo.groupbeban == '' ||
todo.groupcostcenter == null ||
todo.groupcostcenter == '' ||
todo.totalfinal == null ||
todo.totalfinal == '' ||
todo.total == null ||
todo.total == '' ||
todo.jan == null ||
todo.jan == '' ||
todo.feb == null ||
todo.feb == '' ||
todo.mar == null ||
todo.mar == '' ||
todo.apr == null ||
todo.apr == '' ||
todo.mei == null ||
todo.mei == '' ||
todo.jun == null ||
todo.jun == '' ||
todo.jul == null ||
todo.jul == '' ||
todo.ags == null ||
todo.ags == '' ||
todo.sep == null ||
todo.sep == '' ||
todo.okt == null ||
todo.okt == '' ||
todo.nop == null ||
todo.nop == '' ||
todo.des == null ||
todo.des == '' ||
todo.realizationn1 == null ||
todo.realizationn1 == '' ||
todo.realizationn2 == null ||
todo.realizationn2 == '' ||
todo.realizationn3 == null ||
todo.realizationn3 == '' ||
todo.realizationn4 == null ||
todo.realizationn4 == '' ||
todo.realizationn5 == null ||
todo.realizationn5 == '' ||
todo.realizationn6 == null ||
todo.realizationn6 == '' ||
todo.realizationn7 == null ||
todo.realizationn7 == '' ||
todo.realizationn8 == null ||
todo.realizationn8 == '' ||
todo.realizationn9 == null ||
todo.realizationn9 == '' ||
todo.realizationn10 == null ||
todo.realizationn10 == '' ||
todo.realizationn11 == null ||
todo.realizationn11 == '' ||
todo.realizationn12 == null ||
todo.realizationn12 == '' ||
todo.totalrealization == null ||
todo.totalrealization == '' ||
todo.year == null ||
todo.year == ''
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
        <vue-csv-import
        v-model="csv"
        :fields="dataImportCsv"
    >
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
        KodeBeban: false,
        KodeDivisi: false,
        Expense: false,
        ExpenseGroup: false,
        GroupBeban: false,
        GroupCostCenter: false,
        CostCenter: false,
        TOTALFINAL: false,
        TOTAL: false,
        JAN: false,
        FEB: false,
        MAR: false,
        APR: false,
        MEI: false,
        JUN: false,
        JUL: false,
        AGS: false,
        SEP: false,
        OKT: false,
        NOP: false,
        DES: false,
        RealizationN1: false,
        RealizationN2: false,
        RealizationN3: false,
        RealizationN4: false,
        RealizationN5: false,
        RealizationN6: false,
        RealizationN7: false,
        RealizationN8: false,
        RealizationN9: false,
        RealizationN10: false,
        RealizationN11: false,
        RealizationN12: false,
        TotalRealization: false,
        Year: false,
        },

        userid: 0,
        status_table: false,

        modal: false,

        todo: {
          kodebeban: "",
kodedivisi: "",
expense: "",
expensegroup: "",
groupbeban: "",
groupcostcenter: "",
costcenter: "",
totalfinal: "",
total: "",
jan: "",
feb: "",
mar: "",
apr: "",
mei: "",
jun: "",
jul: "",
ags: "",
sep: "",
okt: "",
nop: "",
des: "",
realizationn1: "",
realizationn2: "",
realizationn3: "",
realizationn4: "",
realizationn5: "",
realizationn6: "",
realizationn7: "",
realizationn8: "",
realizationn9: "",
realizationn10: "",
realizationn11: "",
realizationn12: "",
totalrealization: "",
year: "",
          },
      flagButtonAdd: true,
      csv: null,
      dataImportCsv: {
        kodebeban: {
    label: "kodebeban",
    required: true,
},
kodedivisi: {
    label: "kodedivisi",
    required: true, 
},
expense: {
    label: "expense",
    required: true,
},  
expensegroup: {
    label: "expensegroup",
    required: true,
},
groupbeban: {
    label: "groupbeban",
    required: true,
},
groupcostcenter: {
    label: "groupcostcenter",
    required: true,
},
costcenter: {
    label: "costcenter",
    required: true,
},
totalfinal: {
    label: "totalfinal",
    required: true,
},
total: {
    label: "total",
    required: true,
},
jan: {
    label: "jan",
    required: true,
},
feb: {
    label: "feb",
    required: true,
},
mar: {
    label: "mar",
    required: true,
},
apr: {
    label: "apr",
    required: true,
},
mei: {
    label: "mei",
    required: true,
},
jun: {
    label: "jun",
    required: true,
},
jul: {
    label: "jul",
    required: true,
},
ags: {
    label: "ags",
    required: true,
},
sep: {
    label: "sep",
    required: true,
},
okt: {
    label: "okt",
    required: true,
},
nop: {
    label: "nop",
    required: true,
},
des: {
    label: "des",
    required: true,
},
realizationn1: {
    label: "realizationn1",
    required: true,
},
realizationn2: {
    label: "realizationn2",
    required: true,
},
realizationn3: {
    label: "realizationn3",
    required: true,
},
realizationn4: {
    label: "realizationn4",
    required: true,
},
realizationn5: {
    label: "realizationn5",
    required: true,
},
realizationn6: {
    label: "realizationn6",
    required: true,
},
realizationn7: {
    label: "realizationn7",
    required: true,
},
realizationn8: {
    label: "realizationn8",
    required: true,
},
realizationn9: {
    label: "realizationn9",
    required: true,
},
realizationn10: {
    label: "realizationn10",
    required: true,
},
realizationn11: {
    label: "realizationn11",
    required: true,
},
realizationn12: {
    label: "realizationn12",
    required: true,
},
totalrealization: {
    label: "totalrealization",
    required: true,
},
year: {
    label: "year",
    required: true,
},
      }
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
      })
    },
    saveTodo() {
      var mythis = this;

      Swal.fire({
        title: "Create Master User",
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
                KodeDivisi: mythis.todo.KodeDivisi,
                Expense: mythis.todo.Expense,
                ExpenseGroup: mythis.todo.ExpenseGroup,
                GroupBeban: mythis.todo.GroupBeban,
                GroupCostCenter: mythis.todo.GroupCostCenter,
                TOTALFINAL: mythis.todo.TOTALFINAL,
                TOTAL: mythis.todo.TOTAL,
                JAN: mythis.todo.JAN,
                FEB: mythis.todo.FEB,
                MAR: mythis.todo.MAR,
                APR: mythis.todo.APR,
                MEI: mythis.todo.MEI,
                JUN: mythis.todo.JUN,
                JUL: mythis.todo.JUL,
                AGS: mythis.todo.AGS,
                SEP: mythis.todo.SEP,
                OKT: mythis.todo.OKT,
                NOP: mythis.todo.NOP,
                DES: mythis.todo.DES,
                RealizationN1: mythis.todo.RealizationN1,
                RealizationN2: mythis.todo.RealizationN2,
                RealizationN3: mythis.todo.RealizationN3,
                RealizationN4: mythis.todo.RealizationN4,
                RealizationN5: mythis.todo.RealizationN5,
                RealizationN6: mythis.todo.RealizationN6,
                RealizationN7: mythis.todo.RealizationN7,
                RealizationN8: mythis.todo.RealizationN8,
                RealizationN9: mythis.todo.RealizationN9,
                RealizationN10: mythis.todo.RealizationN10,
                RealizationN11: mythis.todo.RealizationN11,
                RealizationN12: mythis.todo.RealizationN12,
                TotalRealization: mythis.todo.TotalRealization,
                Year: mythis.todo.Year,
                userid: mythis.userid

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
"KODE DIVISI",
"EXPENSE",
"EXPENSE GROUP",
"GROUP BEBAN",
"GROUP COST CENTER",
"TOTAL FINAL",
"TOTAL",
'JAN', 'FEB', 'MAR', 'APR', 'MEI',
'JUN', 'JUL', 'AGS', 'SEP', 'OKT',
'NOP', 'DES',
'REALIZATION N1', 'REALIZATION N2', 'REALIZATION N3', 'REALIZATION N4',
'REALIZATION N5', 'REALIZATION N6', 'REALIZATION N7', 'REALIZATION N8',
'REALIZATION N9', 'REALIZATION N10', 'REALIZATION N11', 'REALIZATION N12',
'TOTAL REALIZATION',
'YEAR',

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
          url: this.$root.apiHost + "api/BudgetMonitoring",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.kodebeban}</span>`),
              html(`<span class="pull-left">${card.kodedivisi}</span>`),
              html(`<span class="pull-left">${card.expense}</span>`),
              html(`<span class="pull-left">${card.expensegroup}</span>`),
              html(`<span class="pull-left">${card.groupbeban}</span>`),
              html(`<span class="pull-left">${card.groupcostcenter}</span>`),
              html(`<span class="pull-left">${card.total}</span>`),
              html(`<span class="pull-left">${card.jan}</span>`),
              html(`<span class="pull-left">${card.feb}</span>`),
              html(`<span class="pull-left">${card.mar}</span>`),
              html(`<span class="pull-left">${card.apr}</span>`),
              html(`<span class="pull-left">${card.mei}</span>`),
              html(`<span class="pull-left">${card.jun}</span>`),
              html(`<span class="pull-left">${card.jul}</span>`),
              html(`<span class="pull-left">${card.ags}</span>`),
              html(`<span class="pull-left">${card.sep}</span>`),
              html(`<span class="pull-left">${card.okt}</span>`),
              html(`<span class="pull-left">${card.nop}</span>`),
              html(`<span class="pull-left">${card.des}</span>`),
              html(`<span class="pull-left">${card.realizationn1}</span>`),
              html(`<span class="pull-left">${card.realizationn2}</span>`),
              html(`<span class="pull-left">${card.realizationn3}</span>`),
              html(`<span class="pull-left">${card.realizationn4}</span>`),
              html(`<span class="pull-left">${card.realizationn5}</span>`),
              html(`<span class="pull-left">${card.realizationn6}</span>`),
              html(`<span class="pull-left">${card.realizationn7}</span>`),
              html(`<span class="pull-left">${card.realizationn8}</span>`),
              html(`<span class="pull-left">${card.realizationn9}</span>`),
              html(`<span class="pull-left">${card.realizationn10}</span>`),
              html(`<span class="pull-left">${card.realizationn11}</span>`),
              html(`<span class="pull-left">${card.realizationn12}</span>`),
              html(`<span class="pull-left">${card.totalrealization}</span>`),
              html(`<span class="pull-left">${card.year}</span>`)
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
            .delete(
              mythis.$root.apiHost + `api/BudgetMonitoring/${id}`,
              config
            )
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
      const config = ""
      axios
        .put(
          mythis.$root.apiHost + "api/BudgetMonitoring/" + mythis.todo.id,
          {
            kodebeban: mythis.todo.kodebeban,
kodedivisi: mythis.todo.kodedivisi,
expense: mythis.todo.expense,
expensegroup: mythis.todo.expensegroup,
groupbeban: mythis.todo.groupbeban,
groupcostcenter: mythis.todo.groupcostcenter,
totalfinal: mythis.todo.totalfinal,
total: mythis.todo.total,
jan: mythis.todo.jan,
feb: mythis.todo.feb,
mar: mythis.todo.mar,
apr: mythis.todo.apr,
mei: mythis.todo.mei,
jun: mythis.todo.jun,
jul: mythis.todo.jul,
ags: mythis.todo.ags,
sep: mythis.todo.sep,
okt: mythis.todo.okt,
nop: mythis.todo.nop,
des: mythis.todo.des,
realizationn1: mythis.todo.realizationn1,
realizationn2: mythis.todo.realizationn2,
realizationn3: mythis.todo.realizationn3,
realizationn4: mythis.todo.realizationn4,
realizationn5: mythis.todo.realizationn5,
realizationn6: mythis.todo.realizationn6,
realizationn7: mythis.todo.realizationn7,
realizationn8: mythis.todo.realizationn8,
realizationn9: mythis.todo.realizationn9,
realizationn10: mythis.todo.realizationn10,
realizationn11: mythis.todo.realizationn11,
realizationn12: mythis.todo.realizationn12,
totalrealization: mythis.todo.totalrealization,
year: mythis.todo.year,

            userid: mythis.userid
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
          //console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.kodebeban = res.data.data.kodebeban;
mythis.todo.kodedivisi = res.data.data.kodedivisi;
mythis.todo.expense = res.data.data.expense;
mythis.todo.expensegroup = res.data.data.expensegroup;
mythis.todo.groupbeban = res.data.data.groupbeban;
mythis.todo.groupcostcenter = res.data.data.groupcostcenter;
mythis.todo.totalfinal = res.data.data.totalfinal;
mythis.todo.total = res.data.data.total;
mythis.todo.jan = res.data.data.jan;
mythis.todo.feb = res.data.data.feb;
mythis.todo.mar = res.data.data.mar;
mythis.todo.apr = res.data.data.apr;
mythis.todo.mei = res.data.data.mei;
mythis.todo.jun = res.data.data.jun;
mythis.todo.jul = res.data.data.jul;
mythis.todo.ags = res.data.data.ags;
mythis.todo.sep = res.data.data.sep;
mythis.todo.okt = res.data.data.okt;
mythis.todo.nop = res.data.data.nop;
mythis.todo.des = res.data.data.des;
mythis.todo.realizationn1 = res.data.data.realizationn1;
mythis.todo.realizationn2 = res.data.data.realizationn2;
mythis.todo.realizationn3 = res.data.data.realizationn3;
mythis.todo.realizationn4 = res.data.data.realizationn4;
mythis.todo.realizationn5 = res.data.data.realizationn5;
mythis.todo.realizationn6 = res.data.data.realizationn6;
mythis.todo.realizationn7 = res.data.data.realizationn7;
mythis.todo.realizationn8 = res.data.data.realizationn8;
mythis.todo.realizationn9 = res.data.data.realizationn9;
mythis.todo.realizationn10 = res.data.data.realizationn10;
mythis.todo.realizationn11 = res.data.data.realizationn11;
mythis.todo.realizationn12 = res.data.data.realizationn12;
mythis.todo.totalrealization = res.data.data.totalrealization;
mythis.todo.year = res.data.data.year;


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
