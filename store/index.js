export const state = () => ({
  productsList: [],
  searchList: [],
  userCarts: []
});

export const getters = {
  getProducts(state) {
    return state.productsList;
  },
  getSearchList(state) {
    return state.searchList;
  },
  getUserCarts(state) {
    return state.userCarts;
  },
  getCountCarts(state) {
    const countGoods = state.userCarts.reduce(
      (acc, cur) => (acc += cur.quantity),
      0
    );
    return countGoods;
  },
  getTotalPrice(state) {
    return state.userCarts.reduce(
      (acc, cur) => (acc += cur.quantity * cur.price),
      0
    );
  },
  getMinMaxPrice(state) {
    const min = state.productsList.reduce((prev, curr) =>
      prev.price < curr.price ? prev : curr
    );
    const max = state.productsList.reduce((prev, curr) =>
      prev.price > curr.price ? prev : curr
    );

    return [min.price, max.price];
  }
};

export const mutations = {
  setProductsList(state, payload) {
    state.productsList = payload;
  },
  setSearchList(state, payload) {
    state.searchList = payload;
  },
  setUserCarts(state, payload) {
    state.userCarts = payload;
  },
  addToUserCarts(state, payload) {
    state.userCarts.push(payload);
  },
  addToOneProductToUserCarts(state, payloadId) {
    const find = state.userCarts.find(el => el.id === payloadId);
    if (find) {
      find.quantity++;
    }
  },
  minusOneProductFromUserCarts(state, payloadId) {
    const find = state.userCarts.find(el => el.id === payloadId);
    if (find) {
      find.quantity--;
    }
  },
  removeProductFromUserCarts(state, product) {
    const findIndex = state.userCarts.findIndex(item => item.id === product.id);
    if (findIndex !== undefined) {
      state.userCarts.splice(findIndex, 1);
    }
  },
  clearUserCarts(state) {
    state.userCarts = [];
  },
  sortByPrice(state, sortPrice) {
    if (sortPrice) {
      state.productsList = state.productsList.sort(
        (prev, next) => prev.price - next.price
      );
    } else {
      state.productsList = state.productsList.sort(
        (prev, next) => next.price - prev.price
      );
    }
  }
};

export const actions = {
  async fetchProducts({ commit }) {
    const res = await this.$axios.$get('/api/products');
    const json = await JSON.parse(res);
    commit('setProductsList', json.products);
    commit('setSearchList', json.products);
  },
  async fetchCarts({ commit }) {
    const res = await this.$axios.$get('/api/carts');
    const json = await JSON.parse(res);
    commit('setUserCarts', json.products);
  },
  async addProduct({ commit }, product) {
    const res = await this.$axios.$post('/api/carts', product);
    if (res.result === 1) {
      commit('addToUserCarts', product);
    }
  },
  async changeCarts({ dispatch }, change) {
    const res = await this.$axios.$patch('/api/carts', change);
    if (res.result === 1) {
      dispatch('fetchCarts');
    }
  },
  async removeProduct({ commit }, product) {
    const res = await this.$axios.$delete(`/api/carts/${product.id}`);
    if (res.result === 1) {
      commit('removeProductFromUserCarts', product);
    }
  },
  async clearCarts({ commit }) {
    const res = await this.$axios.$post('/api/carts/clear');
    if (res.result === 1) {
      commit('clearUserCarts');
    }
  }
};
