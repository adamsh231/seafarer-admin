<template>
  <div v-if="isSignedIn">
    <Dashboard>
      <template v-slot:content>
        <router-view/>
      </template>
    </Dashboard>
  </div>
  <div v-else>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500&display=swap');
</style>

<script>
import Dashboard from "./components/Dashboard";

export default {
  name: "App",
  components: {
    Dashboard
  },
  data() {
    return {
      isSignedIn: true
    }
  }
}
</script>
