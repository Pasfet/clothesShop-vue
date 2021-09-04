export const state = () => ({
  productsList: []
});

export const getters = {
  getProducts (state) {
    return state.productsList;
  }
};

export const mutations = {
  setProductsList (state, payload) {
    state.productsList = payload;
  }
};

export const actions = {
  async fetchProducts ({ commit }) {
    const res = await this.$axios.$get('/api/products');
    const json = await JSON.parse(res);
    commit('setProductsList', json.products);
  }
};
