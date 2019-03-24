<template>
  <transition name="fade">
    <div class="sidebar" v-if="toggle">
      <nav class="sidebar-in">

        <b-nav-form class="navbar-search-form mb-4">
          <div class="input-group">
            <b-form-input
                class="form-control py-2 border-right-0 border"
                type="text"
                placeholder="Search"
                id="example-search-input"
                v-click-outside="outside"
                @click="inside"
            />
            <span class="input-group-append">
              <b-button class="border" type="button">
                <span>&#8981;</span>
              </b-button>
            </span>
          </div>
        </b-nav-form>

        <ul>
          <router-link
              :to="{name: 'home'}"
              tag="li"
              class="nav-item"
              active-class="active-class"
              exact
          >
            <a class="nav-link" >Home</a>
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

        </ul>
      </nav>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        toggle: false,
        clickOutside: 0,
      };
    },
    created() {
      this.$root.$on("toggle", () => {
        this.toggle = !this.toggle;
        let body = document.querySelector('body');

        if (this.toggle) {
          body.style.overflow = 'hidden';
        } else {
          body.style.overflow = 'visible';
        }
      });
    },
    methods: {
      hide() {
        this.toggle = false;
        document.querySelector('body').style.overflow = 'visible';
      },
      inside: function() {

        console.log('clicked inside!')
      },
      outside: function() {
        this.clickOutside++;

        if (this.clickOutside > 1) {
          this.hide();
          this.clickOutside = 0;
        }
      }
    },
    directives: {
      'click-outside': {
        bind: function(el, binding, vNode) {
          // Provided expression must evaluate to a function.
          if (typeof binding.value !== 'function') {
            const compName = vNode.context.name;
            let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
            if (compName) { warn += `Found in component '${compName}'` }

            console.warn(warn);
          }
          // Define Handler and cache it on the element
          const bubble = binding.modifiers.bubble;
          const handler = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
              binding.value(e);
            }
          };
          el.__vueClickOutside__ = handler;

          // add Event Listeners
          document.addEventListener('click', handler);
        },

        unbind: function(el) {
          // Remove Event Listeners
          document.removeEventListener('click', el.__vueClickOutside__);
          el.__vueClickOutside__ = null;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #32C69A;
    opacity: 0.9;
    color: #fff;
    z-index: 1000;
  }

  .sidebar-in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

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
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s linear;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-100%);
  }

  @media only screen
  and (max-width: 400px) {
    .sidebar-in ul li a {
      font-size: 20px;
    }
  }
</style>
