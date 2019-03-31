<template>
  <div>
    <div class="banner-box">
      <div
          v-if="siteUrl"
          class="home-bg-img"
          :style="{backgroundImage: 'url(' + siteUrl + 'wp-content/uploads/2019/03/index_hero.jpg)'}"
      >
        <div class="home-bg-img-content container app-container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores assumenda at atque autem cumque delectus deleniti distinctio doloribus eaque earum esse ex fugit harum impedit in inventore ipsam ipsum iusto minus, nam nisi nostrum numquam odio perspiciatis quae quibusdam quod repudiandae, soluta tempore! Aliquam asperiores commodi eos excepturi explicabo fugiat iste magni, nemo nobis officia praesentium quae quas, quisquam saepe sequi, tempore ullam ut veritatis vero voluptatum. Atque dolorem eaque excepturi exercitationem expedita explicabo facilis minima nam quam repellat! Accusamus aspernatur consequuntur deserunt iste itaque minus necessitatibus praesentium reprehenderit sint tempore. Blanditiis, delectus dolorum eius enim exercitationem illo non.
        </div>
      </div>
    </div>
    <div class="container info app-container">

      <div v-if="freeConsultations">
        <img :src="freeConsultations._embedded['wp:featuredmedia']['0'].source_url" alt="image" width="200">
        <h4>{{ freeConsultations.title.rendered }}</h4>
        <p>{{ freeConsultations.excerpt.rendered | stripTags }}</p>
      </div>

      <div v-if="emergencyCare">
        <img :src="emergencyCare._embedded['wp:featuredmedia']['0'].source_url" alt="image" width="200">
        <h4>{{ emergencyCare.title.rendered }}</h4>
        <p>{{ emergencyCare.excerpt.rendered | stripTags }}</p>
      </div>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "Home",
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters({
        getPage: 'getPage'
      }),
      freeConsultations () {
        return this.getPage('free-consultations');
      },
      emergencyCare () {
        return this.getPage('emergency-care');
      },
      siteUrl () {
        return this.$store.getters.getSiteUrl;
      }
    },
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