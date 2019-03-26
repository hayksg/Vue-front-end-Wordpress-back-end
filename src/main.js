import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import './scss/main.scss';
import router from './routes';
import axios from 'axios';
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue);

library.add(faPhone);
library.add(faSearch);

Vue.prototype.$http = axios;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
