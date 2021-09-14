import Vuex from 'vuex';
import { shallowMount, enableAutoDestroy, createLocalVue, RouterLinkStub  } from '@vue/test-utils';
import { nextTick } from 'vue';
import Header from '@/components/HeaderComponent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

describe('Header component test', () => {
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
      getCountCarts: () => 2
    };

    actions = {
      fetchProducts: jest.fn(),
      fetchCarts: jest.fn()
    };

    store = new Vuex.Store({
      getters,
      actions
    });
  });

  const createComponent = () => {
    wrapper = shallowMount(Header, {
      localVue,
      store,
      stubs: {
        'search-component': SearchComponent,
        NuxtLink: RouterLinkStub,
        'button-component': ButtonComponent
      }
    });
  };

  it('render page', async () => {
    createComponent();

    expect(wrapper.exists()).toBe(true);
    expect(actions.fetchProducts).toHaveBeenCalled();
    await nextTick();
    expect(actions.fetchCarts).toHaveBeenCalled();
  });

  it('render search line', () => {
    createComponent();

    expect(wrapper.findComponent(SearchComponent).exists()).toBe(true);
  });

  it('count carts is 2', () => {
    createComponent();

    expect(wrapper.text()).toContain('2');
  });

  it('redirect to "/" on click logo ', () => {
    createComponent();

    wrapper.find('[data-testid=home]').trigger('click');

    expect(wrapper.find('[data-testid=home]').props().to).toBe('/');
  });

  it('redirect to "/cart" on click cart ', () => {
    createComponent();

    wrapper.find('[data-testid=cart]').trigger('click');

    expect(wrapper.find('[data-testid=cart]').props().to).toBe('/cart');
  });
});
