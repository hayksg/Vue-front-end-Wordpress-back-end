<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="header-navbar-top">
      <div class="container">

        <router-link
            tag="a"
            class="navbar-brand"
            :to="{name: 'home'}"
            exact
            active-class="active-class"
        >health<span>+</span></router-link>

        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggle"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <b-collapse is-nav id="nav_collapse">
          <div class="ml-auto">
            <span class="navbar-top-appointment">Appointment</span>
            <font-awesome-icon icon="phone" class="navbar-top-phone" />
            <strong class="navbar-top-phone-number">{{ phone }}</strong>
          </div>
        </b-collapse>

      </div>

    </b-navbar>

    <b-navbar type="dark" class="d-none d-lg-block header-navbar-bottom mb-4" ref="headerNavbarBottom">
      <div class="container">

        <Links />

        <Search />

      </div>
    </b-navbar>

  </div>
</template>

<script>
  import Search from './Search';
  import Links from './Links';

  export default {
    name: "Header",
    components: {
      Search,
      Links
    },
    data () {
      return {
        siteUrl: '',
        phone: ''
      }
    },
    methods: {
      fixNavbar (navbar, sticky) {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      },
      toggle () {
        this.$root.$emit("toggle");
      },
    },
    mounted () {
      this.siteUrl = this.$store.getters.getSiteUrl;

      this.$http.get(this.siteUrl + 'wp-json/vw/v1/custom-data')
        .then(response => {
          if (response.data) {
            this.phone = response.data.appointment_phone;
          }
        })
        .catch(error => {
          //console.log(error);
        });

      var navbar = this.$refs.headerNavbarBottom;
      var sticky = navbar.offsetTop;

      window.onscroll = () => {
        this.fixNavbar(navbar, sticky);
      };
    }
  }
</script>

<style scoped>
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>