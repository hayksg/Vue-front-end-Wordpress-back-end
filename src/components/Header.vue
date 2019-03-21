<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="navbar-top">
      <div class="container">

        <router-link
            tag="a"
            class="navbar-brand"
            :to="{name: 'home'}"
            exact
            active-class="active-class"
        >health<span>+</span></router-link>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
          <div class="ml-auto">
            <span class="navbar-top-appointment">Appointment</span>
            <font-awesome-icon icon="phone" class="navbar-top-phone" />
            <strong class="navbar-top-phone-number">{{ phone }}</strong>
          </div>
        </b-collapse>

      </div>

    </b-navbar>

    <b-navbar type="dark" class="d-none d-lg-block navbar-bottom mb-4">
      <div class="container">


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

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-form class="navbar-search-form">

              <div class="input-group">
                <b-form-input class="form-control py-2 border-right-0 border" type="text" placeholder="Search" id="example-search-input" />
                <span class="input-group-append">
                  <b-button class="border" type="button">
                    <span>&#8981;</span>
                  </b-button>
                </span>
              </div>
            </b-nav-form>

          </b-navbar-nav>

      </div>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data () {
      return {
        phone: ''
      }
    },
    mounted () {
      this.$http.get('http://open-server-wp1.loc/wp-json/vw/v1/custom-data')
        .then(response => {
          if (response.data) {
            this.phone = response.data.appointment_phone;
          }
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>

<style scoped>

</style>