import Vuex from 'vuex';
import { shallowMount, enableAutoDestroy, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import FeaturedItems from '@/components/FeaturedItems.vue';

describe('FeaturedItems component test', () => {
  enableAutoDestroy(beforeEach);
  let wrapper;
  let store;
  let getters;
  let actions;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    getters = {
      getProducts: () => [
        { id: 1, title: 'Product' }
      ],
      getUserCarts: () => [
        { id: 0, title: 'Test' }
      ]
    };

    actions = {
      addOneProduct: jest.fn(),
      addProduct: jest.fn()
    };

    store = new Vuex.Store({
      getters,
      actions
    });
  });

  const createComponent = () => {
    wrapper = shallowMount(FeaturedItems, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
        'card-component': true
      }
    });
  };

  it('render page', () => {
    createComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('render cardComponent', () => {
    createComponent();

    expect(wrapper.find('card-component-stub').exists()).toBe(true);
  });

  it('redirect to "/catalog" on click "Browser all product"', () => {
    createComponent();

    wrapper.findComponent(RouterLinkStub).trigger('click');

    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/catalog');
  });

  it('emit addToCart from cardComponent', () => {
    createComponent();

    wrapper.find('card-component-stub').vm.$emit('addToCart', { id: 3, title: 'title' });

    expect(wrapper.find('card-component-stub').emitted().addToCart).toEqual([[{ id: 3, title: 'title' }]]);
  });

  it('action addProduct was called if product not found in carts', () => {
    createComponent();

    wrapper.find('card-component-stub').vm.$emit('addToCart', { id: 3, title: 'title' });

    expect(actions.addProduct).toHaveBeenCalled();
    expect(actions.addOneProduct).not.toHaveBeenCalled();
  });

  it('action addOneProduct was called if product is carts', () => {
    createComponent();

    wrapper.find('card-component-stub').vm.$emit('addToCart', { id: 0, title: 'Test' });

    expect(actions.addOneProduct).toHaveBeenCalled();
    expect(actions.addProduct).not.toHaveBeenCalled();
  });
});
