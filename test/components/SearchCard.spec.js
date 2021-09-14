import { shallowMount, enableAutoDestroy } from '@vue/test-utils';
import SearchCard from '@/components/SearchCard.vue';

describe('SearchCard test', () => {
  enableAutoDestroy(beforeEach);
  let wrapper;

  jest.mock('~/assets/products/');

  const createComponent = () => {
    wrapper = shallowMount(SearchCard, {
      propsData: {
        goods: {
          title: 'brera',
          price: 100,
          img: ['brera-purse']
        }
      }
    });
  };

  it('render card', () => {
    createComponent();
    console.log(wrapper.html());
    expect(wrapper.exists()).toBe(true);
  });
});
