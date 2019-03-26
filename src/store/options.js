export default {
  state: {
    siteUrl: 'http://open-server-wp1.loc/',
    search: ''
  },
  getters: {
    getSiteUrl (state) {
      return state.siteUrl;
    },
    getSearch (state) {
      return state.search;
    }
  },
  mutations: {
    setSearch (state, payload) {
      state.search = payload;
    },
  },
  actions: {

  }
};
