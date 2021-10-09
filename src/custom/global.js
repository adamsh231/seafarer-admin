import axios from "axios";

export default {
    methods: {
        setCookie(name, data) {
            document.cookie = `${name}=${data}`
        },
        getCookie(name) {
            const value = `; ${document.cookie}`
            const parts = value.split(`; ${name}=`)
            if (parts.length === 2) return parts.pop().split(';').shift()
        },
        deleteCookie(name) {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`
        },
        isTokenExistAndValid(isFromTokenArea = false) {

            // init this
            const context = this

            if (this.getCookie('token') !== undefined) {

                // init url
                let url = `${process.env.VUE_APP_API_AUTH_ADMIN}/current`
                let header = {
                    headers: {
                        Authorization: `Bearer ${context.getCookie('token')}`,
                    }
                }

                // send api
                if (navigator.onLine) {
                    axios.get(url, header).then(function (response) {
                        context.$store.commit('signIn')
                        context.$store.commit('changeAdminName', response.data.data.name.toLowerCase())
                        if (!isFromTokenArea) {
                            context.$router.replace('/candidates')
                        }
                    }).catch(function (error) {
                        context.$toast.add({severity: 'error', summary: "Error", detail: error.message, life: 1000})
                        context.$store.commit('signOut')
                        context.$router.replace('/')
                    })
                } else {
                    context.$toast.add({severity: 'warn', summary: "Warning", detail: "You are in offline mode !!", life: 5000})
                }
            } else {
                if (isFromTokenArea) {
                    context.$router.replace('/')
                }
            }
        }
    }
}
