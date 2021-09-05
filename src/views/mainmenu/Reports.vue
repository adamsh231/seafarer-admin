<template>
Reports
</template>

<script>
export default {
  name: "Reports",
  mounted() {
    this.$store.commit('changeActiveSidebar', 'reports')
  },
}
</script>

<style scoped>

</style>
