<template>
  <button id="scrollTopButton" class="btn btn-success" ref="scrollTopButton" @click="toTop()">
    <font-awesome-icon icon="rocket" class="rocket-icon" />
  </button>
</template>

<script>
  export default {
    name: "ScrollToTop",
    methods: {
      toTop () {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
          window.requestAnimationFrame(this.toTop);
          window.scrollTo(0, currentScroll - (currentScroll / 10));
        }
      },
      myEventHandler () {
        let btn = this.$refs.scrollTopButton;

        if (document.documentElement.scrollTop > 1000) {
          Object.assign(btn.style, {
            opacity: 1,
            transform: 'translateX(-12px)',
            transition: 'all .5s'
          });
        } else {
          Object.assign(btn.style, {
            opacity: 0,
            transform: 'translateX(100px)',
            transition: 'all .5s'
          });
        }
      }
    },
    mounted () {
      window.addEventListener("scroll", this.myEventHandler);
    }
  }
</script>

<style lang="scss" scoped>
  #scrollTopButton {
    position: fixed;
    bottom: 10px;
    right: 0;
    opacity: 0;
    background-color: #32C69A;
    padding: 1rem 0.6rem 0.2rem 0.7rem;

    .rocket-icon {
      font-size: 30px;
      transform: rotate(-45deg);
    }

    &:hover {
      background-color: darken(#32C69A, 15%);
    }
  }
</style>