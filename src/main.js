import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ----------- Axios ------------ //
import axios from 'axios'
import VueAxios from 'vue-axios';
// ------------------------------ //

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
import Sidebar from 'primevue/sidebar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toolbar from "primevue/toolbar";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
// -------------------- //

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.use(ToastService)

app.use(PrimeVue)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Divider', Divider)
app.component('Avatar', Avatar)
app.component('Sidebar', Sidebar)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Toolbar', Toolbar)
app.component('Toast', Toast)

app.mount('#app')
