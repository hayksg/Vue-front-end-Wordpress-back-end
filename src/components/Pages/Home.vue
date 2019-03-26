<template>
  <div>
    <div class="banner-box">
      <div class="home-bg-img" :style="{backgroundImage: 'url(' + siteUrl + 'wp-content/uploads/2019/03/index_hero.jpg)'}">
        <div class="home-bg-img-content container app-container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores assumenda at atque autem cumque delectus deleniti distinctio doloribus eaque earum esse ex fugit harum impedit in inventore ipsam ipsum iusto minus, nam nisi nostrum numquam odio perspiciatis quae quibusdam quod repudiandae, soluta tempore! Aliquam asperiores commodi eos excepturi explicabo fugiat iste magni, nemo nobis officia praesentium quae quas, quisquam saepe sequi, tempore ullam ut veritatis vero voluptatum. Atque dolorem eaque excepturi exercitationem expedita explicabo facilis minima nam quam repellat! Accusamus aspernatur consequuntur deserunt iste itaque minus necessitatibus praesentium reprehenderit sint tempore. Blanditiis, delectus dolorum eius enim exercitationem illo non.
        </div>
      </div>
    </div>
    <div class="container info app-container">
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    <p>Lorem20</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
        siteUrl: '',
      }
    },
    mounted () {
      this.siteUrl = this.$store.getters.getSiteUrl;
    }
  }
</script>

<style scoped>
  .banner-box {
    width: 100%;
    height: 874px;
    display: block;
    position: absolute;
    top: -20px;
  }

  .home-bg-img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    z-index: -100;
  }

  .info {
    margin-top: 800px;
  }

  .home-bg-img-content {
    position: relative;
    top: 300px;
    z-index: 100;
  }
</style>