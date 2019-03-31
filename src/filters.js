import Vue from "vue";

Vue.filter('stripTags', str => {
    return str.replace(/(<([^>]+)>)/ig,"");
});