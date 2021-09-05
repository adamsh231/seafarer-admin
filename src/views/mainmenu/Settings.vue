<template>
Settings
</template>

<script>
export default {
  name: "Settings",
  mounted() {
    this.$store.commit('changeActiveSidebar', 'settings')
  },
}
</script>

<style scoped>

</style>
