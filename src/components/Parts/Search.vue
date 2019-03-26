<template>
    <form
        class="navbar-search-form ml-auto"
        @submit.prevent="searchSubmit"
    >
        <input
            type="text"
            placeholder="Search"
            v-model="search"
            ref="refInChildComponent"
        >
        <button type="submit">
          <font-awesome-icon icon="search" />
        </button>
    </form>
</template>

<script>
  export default {
    name: "Search",
    data () {
      return {
        search: '',
      }
    },
    methods: {
      searchSubmit () {
        this.$store.commit('setSearch', this.search);
        this.search = '';

        document.querySelector('body').style.overflow = 'visible';
        this.$router.push({name: 'search'});
      },
    },
  }
</script>