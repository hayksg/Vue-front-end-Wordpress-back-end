<template>
  <div>

    <Header />
    <Sidebar />

    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Header from './components/Parts/Header';
import Sidebar from './components/Parts/Sidebar';

export default {
  name: 'app',
  components: {
    Header,
    Sidebar
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
