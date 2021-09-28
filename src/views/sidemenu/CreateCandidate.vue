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
                <div class="col-1">
                  <img :src="`https://www.countryflags.io/${slotProps.value.code}/flat/64.png`" width="40">
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
                <div class="col-1">
                  <img :src="`https://www.countryflags.io/${slotProps.option.code}/flat/64.png`" width="40">
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
export default {
  name: "CreateCandidate",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'create-candidate')
  },
  data() {
    return {
      selectedCountry: null,
      countries: [
        {name: 'Australia', code: 'AU'},
        {name: 'Brazil', code: 'BR'},
        {name: 'China', code: 'CN'},
        {name: 'Egypt', code: 'EG'},
        {name: 'France', code: 'FR'},
        {name: 'Germany', code: 'DE'},
        {name: 'India', code: 'IN'},
        {name: 'Japan', code: 'JP'},
        {name: 'Spain', code: 'ES'},
        {name: 'United States', code: 'US'}
      ],
    }
  }
}
</script>

<style scoped>

</style>
