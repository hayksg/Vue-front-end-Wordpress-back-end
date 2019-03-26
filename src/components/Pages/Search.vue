<template>
  <div class="container app-container">
    <h3>{{ title }}</h3>
    <p>{{ search }}</p>
  </div>
</template>

<script>
  export default {
    name: "Search",
    data () {
      return {
        title: 'Search Results For'
      }
    },
    computed: {
      search () {
        return this.$store.getters.getSearch;
      }
    }
  }
</script>

<style scoped>

</style>