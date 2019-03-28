import Vue from "vue";

Vue.mixin({
  methods: {
    stripTags: str => str.replace(/(<([^>]+)>)/ig,"")
  }
});