<template>
  <div class="grid align-items-center mx-auto h-screen custom-container">
    <div class="col-12">
      <Card class="shadow-2">
        <template v-slot:title>

          <div class="text-center mb-5">
            <h3 class="mt-4 mb-1 custom-text-primary">Welcome Back</h3>
            <p class="text-sm text-500 font-normal">Enter your credentials to access your account</p>
          </div>

        </template>
        <template v-slot:content>

          <div class="mx-4 custom-form-margin">
            <div class="mb-3">
                <span class="p-input-icon-left w-full">
                  <i class="pi pi-envelope ml-3 custom-icon"/>
                  <InputText type="text" id="email" v-model="email" class="w-full h-3rem custom-rounded" placeholder="Enter your email"/>
                </span>
            </div>
            <div class="mb-3">
                <span class="p-input-icon-left w-full">
                  <i class="pi pi-lock ml-3 custom-icon"/>
                  <InputText type="password" id="password" v-model="password" class="w-full h-3rem custom-rounded" placeholder="Enter your password"/>
                </span>
            </div>
          </div>

          <div class="mx-4 custom-form-margin">
            <div>
              <Button label="Sign in" class="w-full h-3rem text-xl custom-rounded" @click="signIn" :disabled="disabled"/>
            </div>
          </div>

        </template>
        <template v-slot:footer>
          <div class="text-center">
            <p class="mt-0 mb-3">Forgot your password? <span class="text-primary cursor-pointer">Reset password</span></p>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "primevue/card";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Card
  },
  created() {
    this.isTokenExistAndValid(false)
  },
  data() {
    return {
      email: "",
      password: "",
      disabled: false
    }
  },
  methods: {
    validate() {
      //init
      const invalid = "p-invalid"
      let field = ["email", "password"]
      let isValid = true

      // add class invalid
      field.forEach(value => {
        if (document.getElementById(value).value === "") {
          isValid = false
          document.getElementById(value).classList.add(invalid)
        }
      })

      return isValid
    },
    signIn() {

      // validate form
      let isValid = this.validate()
      const context = this

      if (isValid) {

        // disable button login
        context.disabled = true

        // init url
        let url = `${process.env.VUE_APP_API_AUTH_ADMIN}/login`
        let data = {
          email: this.email,
          password: this.password
        }

        // send api
        axios.post(url, data).then(function (response) {
          context.$toast.add({severity: 'success', summary: response.data.message, detail: "success", life: 1000})
          context.setCookie("token", response.data.data.token)
          context.$store.commit('signIn')
          context.$router.replace("/candidates")
        }).catch(function (error) {
          try {
            if (error.response.data.message.includes("record not") || error.response.data.message.includes("credential")) {
              context.$toast.add({severity: 'error', summary: "Error", detail: "Credential is not match", life: 1000})
            } else {
              context.$toast.add({severity: 'error', summary: "Error", detail: error.message, life: 1000})
            }
          } catch (e) {
            context.$toast.add({severity: 'error', summary: "Error", detail: error.message, life: 1000})
          }
        }).then(function () {

          // enable button login
          context.disabled = false

        })
      } else {
        context.$toast.add({severity: 'warn', summary: "Warning", detail: "Please, check form condition", life: 1000})
      }

    }
  }
}
</script>

<style scoped>
.p-input-icon-left > .p-inputtext {
  padding-left: 4rem;
}

.custom-rounded {
  border-radius: 10px;
}

.custom-text-primary {
  color: #344a6b;
}

.custom-container {
  width: 600px;
}

@media only screen and (max-width: 600px) {
  .custom-container {
    width: 90%;
  }

  .custom-icon {
    margin-left: 0.5rem !important;
  }

  .p-input-icon-left > .p-inputtext {
    padding-left: 2.7rem;
  }

  .custom-form-margin {
    margin-left: 1px !important;
    margin-right: 1px !important;
  }
}
</style>
