<template>
Employees
</template>

<script>
export default {
  name: "Employees",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'employees')
  },
}
</script>

<style scoped>

</style>
