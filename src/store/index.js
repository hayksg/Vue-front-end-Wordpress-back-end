import Vue from "vue";
import Vuex from "vuex";
import options from "./options";

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    options
  }
});

export default store;
