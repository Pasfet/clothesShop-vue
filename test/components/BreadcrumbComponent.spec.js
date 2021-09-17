import { shallowMount, enableAutoDestroy, RouterLinkStub } from '@vue/test-utils';
import Breadcrumb from '@/components/BreadcrumbComponent.vue';

describe('Breadcrumb component', () => {
  enableAutoDestroy(beforeEach);
  let wrapper;

  const createComponent = (settings) => {
    wrapper = shallowMount(Breadcrumb, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        path: '/catalog'
      },
      ...settings
    });
  };

  it('render page', () => {
    createComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('getCurrentPage', () => {
    createComponent();

    expect(wrapper.text()).toContain('catalog');
  });

  it('click on "home" to redirect "/"', () => {
    createComponent();

    wrapper.findComponent(RouterLinkStub).trigger('click');

    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/');
  });

  it('click on "catalog" to redirect "/catalog"', () => {
    createComponent();

    const link = wrapper.findAllComponents(RouterLinkStub).at(1);
    link.trigger('click');

    expect(link.props().to).toBe('catalog');
  });
});
