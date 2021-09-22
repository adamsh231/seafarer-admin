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
            if (this.getCookie('token') !== undefined) {

                // init url
                const context = this
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
                        if (!isFromTokenArea) {
                            context.$router.replace('/dashboard')
                        }
                    }).catch(function (error) {
                        context.$toast.add({severity: 'error', summary: "Error", detail: error.message, life: 1000})
                        context.$store.commit('signOut')
                        context.$router.replace('/')
                    })
                } else {
                    context.$toast.add({severity: 'warn', summary: "Warning", detail: "You are in offline mode !!", life: 5000})
                }
            }
        }
    }
}
