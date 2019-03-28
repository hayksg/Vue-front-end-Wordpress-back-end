export default {
  getSiteUrl (state) {
    return state.siteUrl;
  },
  getSettings (state) {
    return state.settings;
  },
  getSearch (state) {
    return state.search;
  },
  getPages (state) {
    return state.pages;
  },
  getPage (state) {
    return (slug => {
      return state.pages.find(page => {
        return page.slug == slug;
      })
    });
  },
}