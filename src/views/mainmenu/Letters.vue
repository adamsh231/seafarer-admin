<template>
Letters
</template>

<script>
export default {
  name: "Letters",
  created() {
    this.isTokenExistAndValid(true)
  },
  mounted() {
    this.$store.commit('changeActiveSidebar', 'letters')
  },
}
</script>

<style scoped>

</style>
