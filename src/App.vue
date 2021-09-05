<template>
  <div v-if="isSignedIn">
    <MenuBar>
      <template v-slot:content>
        <router-view/>
      </template>
    </MenuBar>
  </div>
  <div v-else>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500&display=swap');
</style>

<script>
import MenuBar from "./components/MenuBar";

export default {
  name: "App",
  components: {
    MenuBar
  },
  data() {
    return {
    }
  },
  computed: {
    isSignedIn(){
      return this.$store.state.isSignedIn
    }
  }
}
</script>
