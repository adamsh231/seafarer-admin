<template>
  <div class="mt-5 mb-6">
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">

      <div class="bg-white m-4">
        <div class="text-center">
          <div class="h-1rem"/>
          <h2 class="text-gray-800">Create New Standby Letter</h2>
        </div>
        <hr>
      </div>

      <div class="bg-white m-4">

        <div class="text-right mb-2">
          <InputText style="width: 210px" v-model="search" @input="listStandbys" placeholder="Search standby by name"/>
        </div>

        <div class="card shadow-2">
          <DataTable :value="standbys" :scrollable="true" scrollHeight="200px">
            <Column field="email" header="Email"></Column>
            <Column field="name" header="Name"></Column>
            <Column style="width: 6rem">
              <template v-slot:body="slotProps">
                <div class="m-auto">
                  <Button icon="pi pi-check-circle" class="p-button-rounded p-button-success" @click="selectStandby(slotProps.data.id)"/>
                </div>
              </template>
            </Column>
          </DataTable>
        </div>

        <Divider class="h-1rem"/>

        <div class="card shadow-2" v-if="selectedStandby !== null">

          <div class="overflow-x-auto">
            <table class="w-full">
              <tr>
                <td class="w-30rem pl-4 py-3">Name</td>
                <td>{{ selectedStandby.name }}</td>
              </tr>
              <tr>
                <td class="pl-4 py-3">Email</td>
                <td>{{ selectedStandby.email }}</td>
              </tr>
              <tr>
                <td class="pl-4 py-3">Ship</td>
                <td>
                  <InputText id="ship" type="text" v-model="ship"/>
                </td>
              </tr>
            </table>
          </div>

          <Divider/>

          <div class="text-right">
            <Button label="Create" class="p-button-raised p-button-rounded mb-3 mr-3" :disabled="disabled" @click="createStandby"/>
          </div>

        </div>

        <div class="h-1rem"/>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateStandby",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'create-standby')
    this.listStandbys()
  },
  data() {
    return {
      selectedStandby: null,
      ship: "",
      search: "",
      standbys: [],
      disabled: false,
    }
  },
  methods: {
    validate() {
      //init
      const invalid = "p-invalid"
      let field = ["ship"]
      let isValid = true

      // add class invalid
      field.forEach(value => {
        if (document.getElementById(value).value === "") {
          isValid = false
          document.getElementById(value).classList.add(invalid)
        }
      })

      return isValid
    },
    listStandbys() {
      // init url
      const context = this
      let url = `${process.env.VUE_APP_API_USER}/available/standbyletter/filter?search=${this.search}&per_page=50` //todo: lazy scroll :(
      let header = {
        headers: {
          Authorization: `Bearer ${context.getCookie('token')}`,
        }
      }
      // send api
      axios.get(url, header).then(function (response) {
        context.standbys = response.data.data
      }).catch(function (error) {
        context.$toast.add({severity: 'error', summary: "Error", detail: error.message, life: 1000})
      })
    },
    selectStandby(id) {
      this.selectedStandby = this.standbys.find(function (value) {
        return value.id === id
      })
    },
    createStandby() {
      // validate form
      let isValid = this.validate()
      const context = this
      if (isValid) {
        // disable button login
        context.disabled = true
        // init url
        let url = `${process.env.VUE_APP_API_RECRUITMENT}/standbyletter`
        let data = {
          user_id: this.selectedStandby.id,
          ship: this.ship,
        }
        let header = {
          headers: {
            Authorization: `Bearer ${context.getCookie('token')}`,
          }
        }
        // send api
        axios.post(url, data, header).then(function (response) {
          context.$toast.add({severity: 'success', summary: response.data.message, detail: "success", life: 1000})
          context.$router.push("/standby")
        }).catch(function (error) {
          context.$toast.add({severity: 'error', summary: "Error", detail: error.message, life: 1000})
        }).then(function () {
          // enable button login
          context.disabled = false
        })
      } else {
        context.$toast.add({severity: 'warn', summary: "Warning", detail: "Please, check form condition", life: 1000})
      }
    }
  }
}
</script>

<style scoped>

</style>
