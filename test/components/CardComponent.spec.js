import { shallowMount, enableAutoDestroy, RouterLinkStub } from '@vue/test-utils';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

describe('CardComponent component test', () => {
  enableAutoDestroy(beforeEach);
  let wrapper;

  const findButtonByText = text =>
    wrapper.findAll('button').wrappers.find(w => w.text() === text);

  const createComponent = () => {
    wrapper = shallowMount(CardComponent, {
      propsData: {
        products: [
          {
            id: 1, title: 'brera', img: ['brera-purse'], description: 'desc', price: 100
          }
        ]
      },
      stubs: {
        NuxtLink: RouterLinkStub,
        'button-component': ButtonComponent
      }
    });
  };

  it('render card', () => {
    createComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('render card on page', () => {
    createComponent();

    expect(wrapper.text()).toContain('brera');
    expect(wrapper.text()).toContain('100');
    expect(wrapper.text()).toContain('desc');
  });

  it('emit addToCart on click addToCard', async () => {
    createComponent();

    await findButtonByText('Add to card').trigger('click');

    expect(wrapper.emitted().addToCart).toEqual([[{ id:1, title: 'brera', img: ['brera-purse'], description: 'desc', price: 100 }]]);
  });

  it('redirect to "/catalog/id"', () => {
    createComponent();

    wrapper.findComponent(RouterLinkStub).trigger('click');

    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/catalog/1');
  });
});
