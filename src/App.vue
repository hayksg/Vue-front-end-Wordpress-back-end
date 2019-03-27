<template>
  <div>

    <Header />
    <Sidebar />

    <router-view></router-view>

    <Footer />
    <ScrollToTop />

  </div>
</template>

<script>
import Header from './components/Parts/Header';
import Sidebar from './components/Parts/Sidebar';
import Footer from './components/Parts/Footer';
import ScrollToTop from './components/Parts/ScrollToTop';

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    Footer,
    ScrollToTop
  }
}
</script>