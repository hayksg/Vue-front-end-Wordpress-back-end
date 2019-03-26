<template>
  <div ref="sidebar">
    <transition name="fade">
      <div class="sidebar" v-if="toggle">
        <nav class="sidebar-in">

          <div class="mb-4">
            <Search ref="refInParentComponent" />
          </div>

          <Links />
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
  import Search from './Search';
  import Links from './Links';

  export default {
    name: "Sidebar",
    components: {
      Search,
      Links
    },
    data() {
      return {
        toggle: false,
        clickOutside: 0,
      };
    },
    methods: {
      hide() {
        this.toggle = false;
        document.querySelector('body').style.overflow = 'visible';
      },
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
    mounted() {
      let determineClickFromInsideOrOutside = event => {

        var childSearchInput = this.$refs.refInParentComponent.$refs.refInChildComponent;

        if (childSearchInput.isEqualNode(event.target)) {
          // console.log('You clicked inside')
        } else {
          // console.log('You clicked outside');

          this.clickOutside++;

          if (this.clickOutside > 0) {
            this.hide();
            this.clickOutside = 0;
          }
        }
      };

      let sidebar = this.$refs.sidebar;
      sidebar.addEventListener('click', determineClickFromInsideOrOutside);
    },
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
      font-size: 20px !important;
    }
  }
</style>