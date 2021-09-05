<template>
Employees
</template>

<script>
export default {
  name: "Employees",
  mounted() {
    this.$store.commit('changeActiveSidebar', 'employees')
  },
}
</script>

<style scoped>

</style>
