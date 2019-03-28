import axios from "axios";

export default {
  setPages ({commit, state}, payload) {
    axios.get(state.siteUrl + 'wp-json/wp/v2/pages?_embed')
      .then(response => {
        if (response.data) {
          commit('setPages', response.data);
        }
      })
      .catch(error => {
        //console.log(error);
      });
  },
  setSettings ({commit, state}, payload) {
    axios.get(state.siteUrl + 'wp-json/vw/v1/custom-data')
      .then(response => {
        if (response.data) {
          commit('setSettings', response.data);
        }
      })
      .catch(error => {
        //console.log(error);
      });
  },
}