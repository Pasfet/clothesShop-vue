import Vuex from 'vuex';
import { nextTick } from 'vue';
import { shallowMount, enableAutoDestroy, createLocalVue } from '@vue/test-utils';
import CartCard from '@/components/CartCard.vue';
import Button from '@/components/ButtonComponent.vue';

describe('CartCard component', () => {
  enableAutoDestroy(beforeEach);

  let wrapper;
  let store;
  let actions;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    actions = {
      addOneProduct: jest.fn(),
      addProduct: jest.fn(),
      fetchCarts: jest.fn(),
      removeProduct: jest.fn(),
      minusOneProduct: jest.fn(),
      clearCarts: jest.fn()
    };

    store = new Vuex.Store({
      actions
    });
  });

  const findButtonByText = text =>
    wrapper.findAll('button').wrappers.find(w => w.text() === text);

  const createComponent = (settings) => {
    wrapper = shallowMount(CartCard, {
      localVue,
      store,
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
    expect(wrapper.text()).toContain('acces');
  });

  it('click on removeProduct', async () => {
    createComponent();

    await wrapper.find('[data-testid=removeFromCart]').trigger('click');

    expect(actions.removeProduct).toHaveBeenCalled();
  });

  it('selected emitted input', () => {
    createComponent();

    wrapper.find('select-component-stub').vm.$emit('input');

    expect(wrapper.find('select-component-stub').emitted().input).toEqual([[]]);
  });

  it('click on "-" and removeProduct', async () => {
    createComponent();

    await findButtonByText('-').trigger('click');

    expect(actions.removeProduct).toHaveBeenCalled();
  });

  it('click on "-" adn minusOneProduct', async () => {
    createComponent({
      propsData: {
        product: { id: 0, title: 'Brera', price: 100, quantity: 2, img: ['brera-purse'], category_name: 'acces', colors: ['red', 'green'], size: ['xs', 'm'] }
      }
    });

    await findButtonByText('-').trigger('click');

    expect(actions.minusOneProduct).toHaveBeenCalled();
  });

  it('click on "+" and addProduct', async () => {
    createComponent();

    await findButtonByText('+').trigger('click');

    expect(actions.addOneProduct).toHaveBeenCalled();
  });
});
