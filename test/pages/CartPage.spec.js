import Vuex from 'vuex';
import { shallowMount, enableAutoDestroy, createLocalVue, RouterLinkStub} from '@vue/test-utils';
import Cart from '@/pages/cart.vue';
import Button from '@/components/ButtonComponent.vue';

describe('Cart page', () => {
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
      getUserCarts: () => [
        { id: 0, title: 'Brera', value: 100, img: ['brera-purse'], category_name: 'acces', colors: ['red', 'green'], size: ['xs', 'm'] }
      ],
      getTotalPrice: () => 200
    };

    actions = {
      addOneProduct: jest.fn(),
      addProduct: jest.fn(),
      fetchCarts: jest.fn(),
      removeProduct: jest.fn(),
      minusOneProduct: jest.fn(),
      clearCarts: jest.fn()
    };

    store = new Vuex.Store({
      getters,
      actions
    });
  });

  const findButtonByText = text =>
    wrapper.findAll('button').wrappers.find(w => w.text() === text);

  const createComponent = () => {
    wrapper = shallowMount(Cart, {
      localVue,
      store,
      stubs: {
        'button-component': Button,
        'header-component': true,
        'breadcrumb-component': true,
        'spinner-component': true,
        'select-component': true,
        'footer-component': true,
        'feedback-block': true,
        'cart-card': true,
        'nuxt-link': RouterLinkStub
      }
    });
  };

  it('render page', () => {
    createComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('render spinner and does not render cartCard', async () => {
    createComponent();

    await wrapper.setData({ loading: true, isEmpty: true });

    expect(wrapper.find('spinner-component-stub').exists()).toBe(true);
    expect(wrapper.find('cart-card-stub').exists()).toBe(false);
  });

  it('render "empty" if userCart is empty', async () => {
    createComponent();

    await wrapper.setData({ isEmpty: true });

    expect(wrapper.text()).toContain('EMPTY');
  });

  it('render cartCard', () => {
    createComponent();

    expect(wrapper.find('cart-card-stub').exists()).toBe(true);
  });

  it('click on button "Clear shopping cart"', async () => {
    createComponent();

    await findButtonByText('Clear shopping cart').trigger('click');

    expect(actions.clearCarts).toHaveBeenCalled();
  });

  it('click on button "Continue shopping" to redirect "/catalog"', async () => {
    createComponent();

    await wrapper.findComponent(RouterLinkStub).trigger('click');

    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/catalog');
  });
});
