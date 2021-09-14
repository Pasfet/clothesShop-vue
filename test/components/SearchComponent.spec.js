import Vuex from 'vuex';
import { shallowMount, enableAutoDestroy, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import SearchComponent from '@/components/SearchComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
// import SearchCard from '@/components/SearchCard.vue';

describe('Search component test', () => {
  enableAutoDestroy(beforeEach);
  let wrapper;
  let store;
  let getters;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    getters = {
      getSearchList: () => [
        { id: 1, title: 'Product' }
      ]
    };

    store = new Vuex.Store({
      getters
    });
  });

  const createComponent = () => {
    wrapper = shallowMount(SearchComponent, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
        'button-component': ButtonComponent,
        'search-card': true
      }
    });
  };

  it('render page', () => {
    createComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('search line is empty does not searchCard', () => {
    createComponent();

    expect(wrapper.find('search-card-stub').exists()).toBe(false);
  });

  it('input value in searchLine', async () => {
    createComponent();

    await wrapper.find('[data-testid=searchLine]').setValue('test');

    expect(wrapper.find('[data-testid=searchLine]').element.value).toBe('test');
  });

  it('searchLine not found product', async () => {
    createComponent();

    await wrapper.find('[data-testid=searchLine]').setValue('test');

    expect(wrapper.text()).toContain('Is empty');
  });

  it('click on product to redirect to "/catalog/1" ', async () => {
    createComponent();
    await wrapper.find('[data-testid=searchLine]').setValue('Product');

    wrapper.findComponent(RouterLinkStub).trigger('click');

    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/catalog/1');
  });
});
