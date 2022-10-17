import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import '../src/assets/css/styles.css';
import '../src/assets/css/Admin.css';
import '../src/assets/css/custom.css';

const app = createApp(App) 
app.use(router)
app.use(VueTelInput)
app.use(VueAxios, axios)
app.mount('#app')