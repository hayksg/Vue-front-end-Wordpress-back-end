import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import News from './components/Pages/News';
import Contact from './components/Pages/Contact';
import Search from './components/Pages/Search';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/services', component: Services, name: 'services' },
    { path: '/news', component: News, name: 'news' },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/search', component: Search, name: 'search' },
  ],
  mode: "history",
  beforeRouteLeave (to, from, next) {
    // do stuff
    // call next() when done
    this.$store.commit('setToggleOverlay', false);
    next()
  }
});

export default router;