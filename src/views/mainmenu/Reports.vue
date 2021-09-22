<template>
Reports
</template>

<script>
export default {
  name: "Reports",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'reports')
  },
}
</script>

<style scoped>

</style>
