import { shallowMount, enableAutoDestroy } from '@vue/test-utils';
import AboutProduct from '@/components/AboutProduct.vue';
import Button from '@/components/ButtonComponent.vue';

describe('AboutProduct component', () => {
  enableAutoDestroy(beforeEach);

  let wrapper;

  const findButtonByText = text =>
    wrapper.findAll('button').wrappers.find(w => w.text() === text);

  const createComponent = (settings) => {
    wrapper = shallowMount(AboutProduct, {
      stubs: {
        'button-component': Button,
        'select-component': true
      },
      propsData: {
        product: { id: 0, title: 'Brera', price: 100, quantity: 1, img: ['brera-purse'], category_name: 'acces', colors: ['red', 'green'], size: ['xs', 'm'] }
      },
      ...settings
    });
  };

  it('render page', () => {
    createComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('render product on page', () => {
    createComponent();

    expect(wrapper.text()).toContain('Brera');
    expect(wrapper.text()).toContain('100');
  });

  it('click on add to cart', async () => {
    createComponent();

    await findButtonByText('add to cart').trigger('click');

    expect(wrapper.emitted().addToCart).toEqual(expect.any(Object));
  });
});
