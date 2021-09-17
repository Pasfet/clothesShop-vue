import { shallowMount, enableAutoDestroy } from '@vue/test-utils';
import SearchCard from '@/components/SearchCard.vue';

describe('SearchCard test', () => {
  enableAutoDestroy(beforeEach);
  let wrapper;


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
    expect(wrapper.exists()).toBe(true);
  });

  it('render goods', () => {
    createComponent();

    expect(wrapper.text()).toContain('brera');
    expect(wrapper.text()).toContain('100');
  });
});
