import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ----- PrimeVue ----- //
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import 'primeflex/primeflex.css'

import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
// -------------------- //


const app = createApp(App)

app.use(store)
app.use(router)

app.use(PrimeVue)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Divider', Divider)
app.component('Avatar', Avatar)

app.mount('#app')
