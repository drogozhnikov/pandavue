<template>
  <div class="post">
    <div v-if="dialogVisible">
      <div v-if="isCreate">
        <BornlistCreateForm
            @create="createUnit"
            @hide="hideDialog"
        />
      </div>
      <div v-else>
        <BornlistUpdateForm
            :selected-unit="updatedUnit"
            @update="updateUnit"
            @hide="hideDialog"
        />
      </div>
    </div>
    <div v-else>
      <div class="app__btns">
        <panda-button @click="showDialog">Create</panda-button>

        <panda-input
            v-model="searchQuery"
            placeholder="Search...."
        />

        <panda-button @click="getData"><font-awesome-icon icon="arrows-rotate"/></panda-button>
      </div>
    </div>

    <div v-if="todayUnit.length>0" class="todaysUnits">
      <p-cell><strong>Todays Birthdays</strong></p-cell>
      <born-list-info-row
          v-for="unit in todayUnit"
          :key="unit.id"
          :unit="unit"
      >
      </born-list-info-row>
    </div>

    <div class="pTable">

      <born-list-table
          :units="sortedAndSearchedUnits"
          v-if="!isPostsLoading"
          @remove="removeUnit"
          @update="updateDialog"
      />

    </div>
    <p-info class="info">{{ infoText }}</p-info>
  </div>
</template>

<script>

import BornListTable from "@/components/bornlists/BornListTable";
import PandaButton from "@/components/UI/PButton";
import PandaInput from "@/components/UI/PInput";
import PInfo from "@/components/UI/PInfo";
import BornlistCreateForm from "@/components/bornlists/BornlistCreateForm";
import BornlistUpdateForm from "@/components/bornlists/BornlistUpdateForm";
import BornlistService from "@/services/bornlist.service";
import AccountsService from "@/services/accounts.service";
import PCell from "@/components/UI/PCell";
import BornListInfoRow from "@/components/bornlists/BornListInfoRow";

export default {
  name: "BornListVue",
  emits: ['remove', 'update', 'create', 'setNotify'],
  components: {
    BornListInfoRow,
    PCell,
    BornlistUpdateForm,
    BornlistCreateForm,
    PInfo,
    PandaInput,
    PandaButton,
    BornListTable,
  },
  data() {
    return {
      units: [],
      todayUnit: [],
      dialogVisible: false,
      isPostsLoading: false,
      searchQuery: '',
      isCreate: true,
      infoText: ' Info ',
      updatedUnit: '',
      isNotify: '',
      file:'',
    }
  },
  methods: {
    async getData() {
      this.isPostsLoading = true;
      BornlistService.getUnits().then(
          (response) => {
            if(response !== undefined){
              this.units = response;
              this.findToday(response)
            }
          }
      );
      this.isPostsLoading = false;
    },
    findToday(units){
      this.todayUnit = units.filter(unit => unit.daysLeft === 'Today') //TODO change "Today" to zerro
      console.log(this.todayUnit)
    },
    removeUnit(unit) {
      BornlistService.removeUnit(unit.id).then(
          (response) => {
            if(response.status===200){
              this.units = this.units.filter(p => p.id !== unit.id)
              this.setInfo("Remove successfully");
            }
          });
    },
    async updateUnit(unit) {

      if (this.checkData(unit)) {
        BornlistService.updateUnit(unit).then(
            (response) => {
              this.updatedUnit = response.data;
              this.isCreate = true;
              this.dialogVisible = false;
              this.setInfo("Update successfully");
              this.getData();
            }
        );
      }
      },

    async createUnit(unit) {
      if (this.checkData(unit)) {
          BornlistService.createUnit(unit).then(
              (response) => {
                if (response.status === 200) {
                  this.units.push(response.data);
                  this.setInfo("Create successfully");
                }
              });
      }
    },
    async loadJson() {
      if(this.file.length>0){
        BornlistService.loadJson(this.file);
      }else{
        this.setInfo(
            "No BornList JSONFile selected"
        )
      }
    },
    updateDialog(unit) {
      this.updatedUnit = unit;
      this.isNotify = unit.notify;
      this.isCreate = false;
      this.dialogVisible = true;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.isCreate = true;
      this.dialogVisible = false;
    },
    setInfo(text) {
      this.infoText = text;
    },
    setFile(file){
      this.file = file;
    },
    checkData(unit) {
      if(AccountsService.getUser() === null){
        alert("Authorization required");
        return false;
      }
      if (unit.firstName.length < 1) {
        alert("Fill name please");
        return false;
      }
      if (unit.lastName.length < 1) {
        alert("Fill lastName please");
        return false;
      }
      if (unit.date.length < 1) {
        alert("Fill date please");
        return false;
      }
      return true;
    },
  },
  mounted() {
    this.getData();
  },
  computed: {
    slice() {
      return [...this.units]
    },
    sortedByName() {
      return [...this.slice].sort((unit1, unit2) => unit1.name?.localeCompare(unit2.name))
    },
    sortedByLeftDays() {
      return [...this.sortedByName].sort((unit1, unit2) => unit1.daysLeft - unit2.daysLeft);
    },
    sortedAndSearchedUnits() {
      return this.sortedByLeftDays.filter(unit =>
          unit.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) |
          unit.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) |
          unit.date.includes(this.searchQuery)
      )
    }
  }
}
</script>

<style scoped>

.todaysUnits{
  background-color: #f2fdf2;
}
.app__btns {
  margin: 10px;
  padding-right: 10px;
  display: grid;
  /*border: 2px solid teal;*/
  /*border-radius: 4px;*/
  grid-template-columns: 1fr 4fr 50px;
  justify-content: space-between;
}

.pTable {
  padding: 5px;
}

.post {
  margin-top: 5px;
}

.info {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0px;
  padding: 2px;
  background-color: rgba(160, 231, 290, 0.3);
  border-radius: 5px;
  border: 1px solid teal;
  text-align: center;
}
</style>