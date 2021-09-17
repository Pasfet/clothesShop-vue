import Vuex from 'vuex';
import { shallowMount, enableAutoDestroy, createLocalVue } from '@vue/test-utils';
import CatalogPage from '@/pages/catalog/index.vue';
import Spinner from '@/components/SpinnerComponent.vue';
import Button from '@/components/ButtonComponent.vue';

describe('catalog page test', () => {
  enableAutoDestroy(beforeEach);
  let wrapper;
  let store;
  let getters;
  let mutations;
  let actions;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    getters = {
      getMinMaxPrice: () => [50, 200],
      getProducts: () => [{ id: 0, title: 'test', price: 100 }],
      getUserCarts: () => [{ id: 1, title: 'test2', price: 500, quantity: 1 }]
    };

    mutations = {
      sortByPrice: jest.fn()
    };

    actions = {
      fetchProducts: jest.fn(),
      addOneProduct: jest.fn(),
      addProduct: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      mutations,
      actions
    });
  });

  const findButtonByText = text =>
    wrapper.findAll('button').wrappers.find(w => w.text() === text);

  const createComponent = () => {
    wrapper = shallowMount(CatalogPage, {
      localVue,
      store,
      stubs: {
        'header-component': true,
        'breadcrumb-component': true,
        'spinner-component': Spinner,
        'vue-range': true,
        'button-component': Button,
        'card-component': true,
        'advantages-block': true,
        'pagination-component': true,
        'feedback-block': true,
        'footer-component': true
      },
      data: () => ({
        range: [50, 200]
      })
    });
  };

  it('render page', () => {
    createComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('render spinner', async () => {
    createComponent();

    await wrapper.setData({
      loading: true
    });

    expect(wrapper.findComponent(Spinner).exists()).toBe(true);
    expect(wrapper.find('main').element.style.getPropertyValue('display')).toBe('none');
  });

  it('cardComponent emitted addToCart and call action addProduct', () => {
    createComponent();

    wrapper.find('card-component-stub').vm.$emit('addToCart', { id: 2, title: 'test2', price: 300 });

    expect(actions.addProduct).toHaveBeenCalled();
  });

  it('cardComponent emitted addToCart and call action addOneProduct', () => {
    createComponent();

    wrapper.find('card-component-stub').vm.$emit('addToCart', { id: 1, title: 'test2', price: 500, quantity: 1 });

    expect(actions.addOneProduct).toHaveBeenCalled();
  });

  it('pagination emitted pagechanged', () => {
    createComponent();

    wrapper.find('pagination-component-stub').vm.$emit('pagechanged', 2);

    expect(wrapper.vm.currentPage).toBe(2);
  });

  it('sort by value increase', async () => {
    createComponent();

    await findButtonByText('Sort by price').trigger('click');

    expect(mutations.sortByPrice).toHaveBeenCalledWith(expect.any(Object), true);
  });

  it('sorting by cost reduction', async () => {
    createComponent();

    await findButtonByText('Sort by price').trigger('click');
    await findButtonByText('Sort by price').trigger('click');

    expect(mutations.sortByPrice).toHaveBeenCalledWith(expect.any(Object), false);
  });
});
