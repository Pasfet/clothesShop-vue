import { mutations } from '@/store/index.js';

describe('Mutations test', () => {
  it('setProductsList', () => {
    const state = {
      productsList: []
    };

    mutations.setProductsList(state, [{ id: 1, title: 'test', price: 100 }]);

    expect(state.productsList).toEqual([{ id: 1, title: 'test', price: 100 }]);
  });

  it('setSearchList', () => {
    const state = {
      searchList: []
    };

    mutations.setSearchList(state, [{ id: 1, title: 'test', price: 100 }]);

    expect(state.searchList).toEqual([{ id: 1, title: 'test', price: 100 }]);
  });

  it('setUserCarts', () => {
    const state = {
      userCarts: []
    };

    mutations.setUserCarts(state, [{ id: 1, title: 'test', price: 100, quantity: 1 }]);

    expect(state.userCarts).toEqual([{ id: 1, title: 'test', price: 100, quantity: 1 }]);
  });

  it('addToUserCarts', () => {
    const state = {
      userCarts: []
    };

    mutations.addToUserCarts(state, { id: 1, title: 'test', price: 100, quantity: 1 });

    expect(state.userCarts).toEqual([{ id: 1, title: 'test', price: 100, quantity: 1 }]);
  });

  it('addToOneProductToUserCarts', () => {
    const state = {
      userCarts: [{ id: 1, title: 'test', price: 100, quantity: 1 }]
    };

    mutations.addToOneProductToUserCarts(state, 1);

    expect(state.userCarts).toEqual([{ id: 1, title: 'test', price: 100, quantity: 2 }]);
  });

  it('minusOneProductFromUserCarts', () => {
    const state = {
      userCarts: [{ id: 1, title: 'test', price: 100, quantity: 2 }]
    };

    mutations.minusOneProductFromUserCarts(state, 1);

    expect(state.userCarts).toEqual([{ id: 1, title: 'test', price: 100, quantity: 1 }]);
  });

  it('removeProductFromUserCarts', () => {
    const state = {
      userCarts: [{ id: 1, title: 'test', price: 100, quantity: 2 }, { id: 2, title: 'test2', price: 100, quantity: 2 }]
    };

    mutations.removeProductFromUserCarts(state, { id: 1, title: 'test', price: 100, quantity: 2 });

    expect(state.userCarts).toEqual([{ id: 2, title: 'test2', price: 100, quantity: 2 }]);
  });

  it('clearUserCarts', () => {
    const state = {
      userCarts: [{ id: 1, title: 'test', price: 100, quantity: 2 }, { id: 2, title: 'test2', price: 100, quantity: 2 }]
    };

    mutations.clearUserCarts(state);

    expect(state.userCarts).toEqual([]);
  });

  it('sortByPrice sort by value increase', () => {
    const state = {
      productsList: [{ id: 1, title: 'test', price: 100 }, { id: 2, title: 'test2', price: 20 }]
    };

    mutations.sortByPrice(state, true);

    expect(state.productsList).toEqual([{ id: 2, title: 'test2', price: 20 }, { id: 1, title: 'test', price: 100 }]);
  });

  it('sorting by cost reduction', () => {
    const state = {
      productsList: [{ id: 1, title: 'test', price: 100 }, { id: 2, title: 'test2', price: 20 }]
    };

    mutations.sortByPrice(state, false);

    expect(state.productsList).toEqual([{ id: 1, title: 'test', price: 100 }, { id: 2, title: 'test2', price: 20 }]);
  });
});
