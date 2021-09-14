import Vuex from 'vuex';
import { shallowMount, enableAutoDestroy, createLocalVue } from '@vue/test-utils';
import MainPage from '@/pages/index.vue';
import Spinner from '@/components/SpinnerComponent.vue';

describe('Main page test', () => {
  enableAutoDestroy(beforeEach);
  let wrapper;
  let store;
  let actions;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    actions = {
      fetchProducts: jest.fn()
    };

    store = new Vuex.Store({
      actions
    });
  });

  const createComponent = () => {
    wrapper = shallowMount(MainPage, {
      localVue,
      store,
      stubs: {
        'header-component': true,
        'spinner-component': Spinner,
        'index-intro': true,
        'offer-component': true,
        'featured-items': true,
        'advantages-block': true,
        'feedback-block': true,
        'footer-component': true
      }
    });
  };

  it('render page', () => {
    createComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('main have style display none', () => {
    createComponent();

    expect(wrapper.find('main').element.style.getPropertyValue('display')).toBe('none');
    expect(wrapper.findComponent(Spinner).exists()).toBe(true);
  });

  it('main have not display none if loading false', async () => {
    createComponent();

    await wrapper.setData({ loading: false });

    expect(wrapper.find('main').element.style.getPropertyValue('display')).toBe('');
    expect(wrapper.findComponent(Spinner).exists()).toBe(false);
  });
});
