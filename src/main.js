import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import './scss/main.scss';
import router from './routes';
import filters from './filters';
import fortawesome from './fortawesome';
import store from "./store";

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  mounted () {
    this.$store.dispatch('setPages');
    this.$store.dispatch('setSettings');
  }
});
