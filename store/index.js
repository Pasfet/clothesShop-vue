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
  },
  getTotalPrice (state) {
    return state.userCarts.reduce((acc, cur) => (acc += cur.quantity * cur.price), 0);
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
  },
  minusOneProductFromUserCarts (state, payloadId) {
    const find = state.userCarts.find(el => el.id === payloadId);
    if (find) {
      find.quantity--;
    }
  },
  removeProductFromUserCarts (state, product) {
    const findIndex = state.userCarts.findIndex(item => item.id === product.id);
    if (findIndex) {
      state.userCarts.splice(findIndex, 1);
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
  async addOneProduct ({ commit }, productId) { // REFACTOR
    const res = await this.$axios.$put(`/api/carts/${productId}`);
    if (res.result === 1) {
      commit('addToOneProductToUserCarts', productId);
    }
  },
  async minusOneProduct ({ commit }, productId) {
    const res = await this.$axios.$put(`/api/carts/${productId}/minus`);
    if (res.result === 1) {
      commit('minusOneProductFromUserCarts', productId);
    }
  },
  async removeProduct ({ commit }, product) {
    const res = await this.$axios.$delete(`/api/carts/${product.id}`);
    if (res.result === 1) {
      commit('removeProductFromUserCarts', product);
    }
  }
};
