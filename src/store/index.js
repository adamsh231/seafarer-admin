import { createStore } from 'vuex'

export default createStore({
  state: {
    isSignedIn: false,
    activeSidebar: ""
  },
  mutations: {
    // state, payload => payload = {x,y,z}
    changeActiveSidebar(state, name){
      state.activeSidebar = name
    },
    signIn(state){
      state.isSignedIn = true
    },
    signOut(state){
      state.isSignedIn = false
    }
  },
  actions: {
  },
  modules: {
  }
})
