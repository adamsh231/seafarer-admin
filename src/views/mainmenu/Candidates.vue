<template>
  <div class="mt-5 mb-6">
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">
      <div class="bg-white m-4">
        <div class="text-right">
          <Button label="Create Candidate" icon="pi pi-plus" class="p-button-info mt-4 mr-2 custom-button-create" @click="$router.push('/create-candidate')"/>
        </div>
      </div>
      <div class="bg-white m-4">
        <DataTable :value="candidates" responsiveLayout="scroll">
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
  name: "Candidates",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'candidates')
    this.listCandidates()
  },
  data() {
    return {
      candidates: []
    }
  },
  methods: {
    listCandidates(){
      // init url
      const context = this
      let url = `${process.env.VUE_APP_API_USER}/available/employee/filter`
      let header = {
        headers: {
          Authorization: `Bearer ${context.getCookie('token')}`,
        }
      }

      // send api
      axios.get(url, header).then(function (response) {
        context.candidates.push(...response.data.data)
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

  .custom-button-print {
    font-size: 12px;
  }
}
</style>
