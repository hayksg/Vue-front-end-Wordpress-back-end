<template>
  <b-navbar-nav>

    <router-link
        :to="{name: 'home'}"
        tag="li"
        class="nav-item"
        active-class="active-class"
        exact
    >
      <a class="nav-link">Home</a>
    </router-link>

    <router-link
        :to="{name: 'about'}"
        tag="li"
        class="nav-item"
        active-class="active-class"
        exact
    >
      <a class="nav-link">About Us</a>
    </router-link>

    <router-link
        :to="{name: 'services'}"
        tag="li"
        class="nav-item"
        active-class="active-class"
        exact
    >
      <a class="nav-link">Services</a>
    </router-link>

    <router-link
        :to="{name: 'news'}"
        tag="li"
        class="nav-item"
        active-class="active-class"
        exact
    >
      <a class="nav-link">News</a>
    </router-link>

    <router-link
        :to="{name: 'contact'}"
        tag="li"
        class="nav-item"
        active-class="active-class"
        exact
    >
      <a class="nav-link">Contact</a>
    </router-link>

   </b-navbar-nav>
</template>

<script>
  export default {
    name: "Links"
  }
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      a {
        display: inline-block;
        position: relative;
        font-size: 36px;
        color: #FFFFFF;
        font-weight: 600;
      }
    }
  }
</style>