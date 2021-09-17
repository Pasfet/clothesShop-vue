import { shallowMount, enableAutoDestroy} from '@vue/test-utils';
import Select from '@/components/SelectComponent.vue';

describe('Select component', () => {
  enableAutoDestroy(beforeEach);

  let wrapper;

  const createComponent = (settings) => {
    wrapper = shallowMount(Select, {
      ...settings
    });
  };

  it('render select', () => {
    createComponent({
      propsData: {
        options: ['xs', 'm', 'xl']
      }
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('click on "m"', () => {
    createComponent({
      propsData: {
        options: ['xs', 'm', 'xl']
      }
    });

    wrapper.findAll('[data-testid=select]').at(1).trigger('click');

    expect(wrapper.emitted().input).toEqual([[null], ['m']]);
  });
});
