<template>
  Dashboard
</template>

<script>
export default {
  name: "Dashboard",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'dashboard')
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>
