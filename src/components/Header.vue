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
            @click="toggle();"
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
      toggle() {
        this.$root.$emit("toggle");
      }
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
          console.log(error);
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