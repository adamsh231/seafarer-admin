<template>
Standby
</template>

<script>
export default {
  name: "StandBy",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'standby')
  },
}
</script>

<style scoped>

</style>
