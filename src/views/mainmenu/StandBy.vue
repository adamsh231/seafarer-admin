<template>
Standby
</template>

<script>
export default {
  name: "StandBy",
  mounted() {
    this.$store.commit('changeActiveSidebar', 'standby')
  },
}
</script>

<style scoped>

</style>
