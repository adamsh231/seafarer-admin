<template>
Settings
</template>

<script>
export default {
  name: "Settings",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'settings')
  },
}
</script>

<style scoped>

</style>
