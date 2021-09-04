export const state = () => ({
  productsList: [],
  userCarts: []
});

export const getters = {
  getProducts (state) {
    return state.productsList;
  },
  getUserCarts (state) {
    return state.userCarts;
  },
  getCountCarts (state) {
    const countGoods = state.userCarts.reduce((acc, cur) => (acc += cur.quantity), 0);
    return countGoods;
  }
};

export const mutations = {
  setProductsList (state, payload) {
    state.productsList = payload;
  },
  setUserCarts (state, payload) {
    state.userCarts = payload;
  },
  addToUserCarts (state, payload) {
    state.userCarts.push(payload);
  },
  addToOneProductToUserCarts (state, payloadId) {
    const find = state.userCarts.find(el => el.id === payloadId);
    if (find) {
      find.quantity++;
    }
  }
};

export const actions = {
  async fetchProducts ({ commit }) {
    const res = await this.$axios.$get('/api/products');
    const json = await JSON.parse(res);
    commit('setProductsList', json.products);
  },
  async fetchCarts ({ commit }) {
    const res = await this.$axios.$get('/api/carts');
    const json = await JSON.parse(res);
    commit('setUserCarts', json.products);
  },
  async addProduct ({ commit }, product) {
    const res = await this.$axios.$post('/api/carts', product);
    if (res.result === 1) {
      commit('addToUserCarts', product);
    }
  },
  async addOneProduct ({ commit }, productId) {
    const res = await this.$axios.$put(`/api/carts/${productId}`);
    if (res.result === 1) {
      commit('addToOneProductToUserCarts', productId);
    }
  }
};
