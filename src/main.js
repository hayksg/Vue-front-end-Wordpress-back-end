import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import './scss/main.scss';
import router from './routes';
import axios from 'axios';
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone);

Vue.prototype.$http = axios;

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);





/*Vue.directive('click-outside', {
  priority: 700,
  bind (el, binding, vnode) {

    el.event = function (event) {
      console.log('emitting event')
      vnode.context.$emit(el.expression,event)

    }
    el.addEventListener('click', el.stopProp)
    document.body.addEventListener('click',el.event)
  },

  unbind(el) {
    console.log('unbind')
    el.removeEventListener('click', el.stopProp)
    document.body.removeEventListener('click',el.event)
  },
  stopProp(event) {event.stopPropagation() }
})*/

let handleOutsideClick;

Vue.directive('click-outside', {
  bind (el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    handleOutsideClick = (e) => {
      e.stopPropagation()
      // Get the handler method name and the exclude array
      // from the object used in v-closable
      const { handler, exclude } = binding.value
      // This variable indicates if the clicked element is excluded
      let clickedOnExcludedEl = false
      exclude.forEach(refName => {
        // We only run this code if we haven't detected
        // any excluded element yet
        if (!clickedOnExcludedEl) {
          // Get the element using the reference name
          const excludedEl = vnode.context.$refs[refName]
          // See if this excluded element
          // is the same element the user just clicked on
          clickedOnExcludedEl = excludedEl.contains(e.target)
        }
      })
      // We check to see if the clicked element is not
      // the dialog element and not excluded
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]()
      }
    }
    // Register click/touchstart event listeners on the whole page
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  },
  unbind () {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
})





new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
