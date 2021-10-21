<template>
  <div class="mt-5 mb-6">
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">

      <div class="bg-white m-4">
        <div class="text-center">
          <div class="h-1rem"/>
          <h2 class="text-gray-800">Create New Employee</h2>
        </div>
        <hr>
      </div>

      <div class="bg-white m-4">

        <div class="text-right mb-2">
          <InputText style="width: 210px" v-model="search" @input="listEmployees" placeholder="Search employee by name"/>
        </div>

        <div class="card shadow-2">
          <DataTable :value="employees" :scrollable="true" scrollHeight="200px">
            <Column field="email" header="Email"></Column>
            <Column field="name" header="Name"></Column>
            <Column style="width: 6rem">
              <template v-slot:body="slotProps">
                <div class="m-auto">
                  <Button icon="pi pi-check-circle" class="p-button-rounded p-button-success" @click="selectEmployee(slotProps.data.id)"/>
                </div>
              </template>
            </Column>
          </DataTable>
        </div>

        <Divider class="h-1rem"/>

        <div class="card shadow-2" v-if="selectedEmployee !== null">

          <div class="overflow-x-auto">
            <table class="w-full">
              <tr>
                <td class="w-30rem pl-4 py-3">Name</td>
                <td>{{ selectedEmployee.name }}</td>
              </tr>
              <tr>
                <td class="pl-4 py-3">Email</td>
                <td>{{ selectedEmployee.email }}</td>
              </tr>
              <tr>
                <td class="pl-4 py-3">Salary (USD)</td>
                <td>
                  <InputText id="salary" type="number" v-model="salary"/>
                </td>
              </tr>
            </table>
          </div>

          <Divider/>

          <div class="text-right">
            <Button label="Create" class="p-button-raised p-button-rounded mb-3 mr-3" :disabled="disabled" @click="createEmployee"/>
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
  name: "CreateEmployee",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'create-employee')
    this.listEmployees()
  },
  data() {
    return {
      selectedEmployee: null,
      salary: 0,
      search: "",
      employees: [],
      disabled: false,
    }
  },
  methods: {
    validate() {
      //init
      const invalid = "p-invalid"
      let field = ["salary"]
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
    listEmployees() {
      // init url
      const context = this
      let url = `${process.env.VUE_APP_API_USER}/available/employee/filter?search=${this.search}&per_page=50` //todo: lazy scroll :(
      let header = {
        headers: {
          Authorization: `Bearer ${context.getCookie('token')}`,
        }
      }
      // send api
      axios.get(url, header).then(function (response) {
        context.employees = response.data.data
      }).catch(function (error) {
        context.$toast.add({severity: 'error', summary: "Error", detail: error.message, life: 1000})
      })
    },
    selectEmployee(id) {
      this.selectedEmployee = this.employees.find(function (value) {
        return value.id === id
      })
    },
    createEmployee() {
      // validate form
      let isValid = this.validate()
      const context = this
      if (isValid) {
        // disable button login
        context.disabled = true
        // init url
        let url = `${process.env.VUE_APP_API_RECRUITMENT}/employee`
        let data = {
          user_id: this.selectedEmployee.id,
          salary: parseFloat(this.salary),
        }
        let header = {
          headers: {
            Authorization: `Bearer ${context.getCookie('token')}`,
          }
        }
        // send api
        axios.post(url, data, header).then(function (response) {
          context.$toast.add({severity: 'success', summary: response.data.message, detail: "success", life: 1000})
          context.$router.push("/employees")
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
