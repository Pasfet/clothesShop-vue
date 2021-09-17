import { getters } from '@/store/index.js';

describe('Getters vuex test', () => {
  it('getProducts', () => {
    const state = {
      productsList: [
        { id: 1, title: 'test', price: 100 }
      ]
    };

    const res = getters.getProducts(state);

    expect(res).toEqual([{ id: 1, title: 'test', price: 100}]);
  });

  it('getSearchList', () => {
    const state = {
      searchList: [
        { id: 1, title: 'test', price: 100 }
      ]
    };

    const res = getters.getSearchList(state);

    expect(res).toEqual([{ id: 1, title: 'test', price: 100 }]);
  });

  it('getUserCarts', () => {
    const state = {
      userCarts: [
        { id: 1, title: 'test', price: 100, quantity: 1 }
      ]
    };

    const res = getters.getUserCarts(state);

    expect(res).toEqual([{ id: 1, title: 'test', price: 100, quantity: 1 }]);
  });

  it('getCountCarts', () => {
    const state = {
      userCarts: [
        { id: 1, title: 'test', price: 100, quantity: 1 },
        { id: 2, title: 'test2', price: 50, quantity: 2 }
      ]
    };

    const res = getters.getCountCarts(state);

    expect(res).toBe(3);
  });

  it('getTotalPrice', () => {
    const state = {
      userCarts: [
        { id: 1, title: 'test', price: 100, quantity: 1 },
        { id: 2, title: 'test2', price: 50, quantity: 2 }
      ]
    };

    const res = getters.getTotalPrice(state);

    expect(res).toBe(200);
  });

  it('getMinMaxPrice', () => {
    const state = {
      productsList: [
        { id: 1, title: 'test', price: 100, quantity: 1 },
        { id: 2, title: 'test2', price: 50, quantity: 2 },
        { id: 3, title: 'test3', price: 20, quantity: 3 }
      ]
    };

    const res = getters.getMinMaxPrice(state);

    expect(res).toEqual([20, 100]);
  });
});
