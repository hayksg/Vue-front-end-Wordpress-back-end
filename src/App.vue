<template>
  <div>

    <Header />


    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header,
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
