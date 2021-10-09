<template>
  <div class="mt-5 mb-6">
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">
      <div class="bg-white m-4">
        <div class="text-right">
          <Button label="Create Standby" icon="pi pi-plus" class="p-button-info mt-4 mr-2 custom-button-create" @click="$router.push('/create-standby')"/>
        </div>
      </div>
      <div class="bg-white m-4">
        <DataTable :value="standBy" responsiveLayout="scroll">
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="email" header="Email"></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StandBy",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'standby')
    this.listStandBy()
  },data() {
    return {
      standBy: []
    }
  },
  methods: {
    listStandBy(){
      // init url
      const context = this
      let url = `${process.env.VUE_APP_API_RECRUITMENT}/standbyletter/filter`
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
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 400px) {
  .custom-button-create {
    font-size: 12px;
  }
}
</style>
