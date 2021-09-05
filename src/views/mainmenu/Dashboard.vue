<template>
  Dashboard
</template>

<script>
export default {
  name: "Dashboard",
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
