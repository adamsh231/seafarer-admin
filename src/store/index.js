import { createStore } from 'vuex'

export default createStore({
  state: {
    isSignedIn: false,
    activeSidebar: "",
    currentAdminName: ""
  },
  getters: {
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
      document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:01 GMT` // delete token
    },
    changeAdminName(state, name){
      state.currentAdminName = name
    },
  },
  actions: {
  },
  modules: {
  }
})
