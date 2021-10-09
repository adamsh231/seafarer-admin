<template>
  <div class="mt-5 mb-6">
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">
      <div class="bg-white m-4">
        <div class="text-center">
          <div class="h-1rem"/>
          <h2 class="text-gray-800">Create New Candidate</h2>
        </div>
        <hr>
      </div>
      <div class="bg-white m-4">
        <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true"
                  class="mb-5 w-full">
          <template v-slot:value="slotProps">
            <div class="country-item country-item-value" v-if="slotProps.value">
              <div class="grid m-auto">
                <div class="col m-auto">
                  <div>{{ slotProps.value.id }}</div>
                </div>
                <div class="col m-auto">
                  <div>{{ slotProps.value.name }}</div>
                </div>
              </div>
            </div>
            <span v-else>
                {{ slotProps.placeholder }}
            </span>
          </template>
          <template v-slot:option="slotProps">
            <div class="country-item">
              <div class="grid m-auto">
                <div class="col m-auto">
                  <div>{{ slotProps.option.id }}</div>
                </div>
                <div class="col m-auto">
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </div>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateCandidate",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'create-candidate')
    this.listCandidates()
  },
  data() {
    return {
      selectedCountry: null,
      countries: [],
    }
  },
  methods: {
    listCandidates(){
      // init url
      const context = this
      let url = `${process.env.VUE_APP_API_USER}/filter`
      let header = {
        headers: {
          Authorization: `Bearer ${context.getCookie('token')}`,
        }
      }

      // send api
      axios.get(url, header).then(function (response) {
        context.countries.push(...response.data.data)
      }).catch(function (error) {
        context.$toast.add({severity: 'error', summary: "Error", detail: error.message, life: 1000})
      })
    }
  }
}
</script>

<style scoped>

</style>
