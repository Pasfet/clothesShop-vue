import axios from 'axios';
import { actions } from '@/store/index.js';

let mockAxiosGetResult;
let mockAxiosPostResult;
let mockAxiosPutResult;
let mockAxiosDeleteResult;
jest.mock('axios', () => ({
  $get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
  $post: jest.fn(() => Promise.resolve(mockAxiosPostResult)),
  $put: jest.fn(() => Promise.resolve(mockAxiosPutResult)),
  $delete: jest.fn(() => Promise.resolve(mockAxiosDeleteResult))
}));

describe('store', () => {
  let action;

  const testedAction = (context = {}, payload = {}) => {
    return actions[action].bind({ $axios: axios })(context, payload);
  };

  const context = {
    commit: jest.fn()
  };
  describe('actions', () => {
    it('fetchProducts', async () => {
      action = 'fetchProducts';
      mockAxiosGetResult = {
        products: [{ id: 1, title: 'test', price: 100 }]
      };
      JSON.parse = jest.fn().mockImplementation(() => {
        return {
          products: [{ id: 1, title: 'test', price: 100 }]
        };
      });

      await testedAction(context, null);

      expect(context.commit).toHaveBeenCalledWith(
        'setProductsList',
        expect.any(Object)
      );
      expect(context.commit).toHaveBeenCalledWith(
        'setSearchList',
        expect.any(Object)
      );
    });

    it('fetchCarts', async () => {
      action = 'fetchCarts';
      mockAxiosGetResult = {
        products: [{ id: 1, title: 'test', price: 100, quantity: 1 }]
      };
      JSON.parse = jest.fn().mockImplementation(() => {
        return {
          products: [{ id: 1, title: 'test', price: 100, quantity: 1 }]
        };
      });

      await testedAction(context, null);

      expect(context.commit).toHaveBeenCalledWith('setUserCarts', expect.any(Object));
    });

    it('addProduct', async () => {
      action = 'addProduct';
      mockAxiosPostResult = {
        result: 1
      };
      const product = { id: 1, title: 'test', price: 100, quantity: 1 };

      await testedAction(context, product);

      expect(context.commit).toHaveBeenCalledWith('addToUserCarts', product);
    });

    it('addOneProduct', async () => {
      action = 'addOneProduct';
      mockAxiosPutResult = {
        result: 1
      };
      const productId = 1;

      await testedAction(context, productId);

      expect(context.commit).toHaveBeenCalledWith('addToOneProductToUserCarts', productId);
    });

    it('minusOneProduct', async () => {
      action = 'minusOneProduct';
      mockAxiosPutResult = {
        result: 1
      };
      const productId = 1;

      await testedAction(context, productId);

      expect(context.commit).toHaveBeenCalledWith('minusOneProductFromUserCarts', productId);
    });

    it('removeProduct', async () => {
      action = 'removeProduct';
      mockAxiosDeleteResult = {
        result: 1
      };
      const product = { id: 1, title: 'test', price: 100, quantity: 1 };

      await testedAction(context, product);

      expect(context.commit).toHaveBeenCalledWith('removeProductFromUserCarts', product);
    });

    it('clearCarts', async () => {
      action = 'clearCarts';
      mockAxiosPostResult = {
        result: 1
      };

      await testedAction(context, null);

      expect(context.commit).toHaveBeenCalledWith('clearUserCarts');
    });
  });
});
