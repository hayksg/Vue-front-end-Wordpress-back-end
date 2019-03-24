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
import Header from './components/Header';
import Sidebar from './components/Sidebar';

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
