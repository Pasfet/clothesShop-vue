import { shallowMount, enableAutoDestroy } from '@vue/test-utils';
import Pagination from '@/components/PaginationComponent.vue';

describe('pagination components', () => {
  enableAutoDestroy(beforeEach);
  let wrapper;

  // const totalPages = Math.ceil(totalLength / perPage);

  const createComponent = (settings) => {
    wrapper = shallowMount(Pagination, {
      ...settings
    });
  };

  const findButtonByText = text =>
    wrapper.findAll('button').wrappers.find(w => w.text() === text);

  it('render pagination', () => {
    createComponent({
      propsData: {
        totalLength: 20,
        perPage: 5,
        currentPage: 1
      }
    });
    expect(wrapper.text()).toContain('1', '2', '3', '4');
  });
  it('render arrows-prev/next pages pagination', () => {
    createComponent({
      propsData: {
        totalLength: 20,
        perPage: 5,
        currentPage: 1
      }
    });
    expect(wrapper.html()).toContain('‹', '›');
  });
  it('render arrows-first/last pages pagination', () => {
    createComponent({
      propsData: {
        totalLength: 20,
        perPage: 5,
        currentPage: 1
      }
    });
    expect(wrapper.html()).toContain('«', '»');
  });

  it('click on button emitted events pagechange', async () => {
    const clickNumberPage = '1';
    createComponent({
      propsData: {
        totalLength: 20,
        perPage: 5,
        currentPage: 2
      }
    });

    await findButtonByText(clickNumberPage).trigger('click');

    expect(wrapper.emitted().pagechanged).toStrictEqual([[+clickNumberPage]]);
  });

  it('click prev arrow', async () => {
    const clickNumberPage = '‹';
    createComponent({
      propsData: {
        totalLength: 20,
        perPage: 5,
        currentPage: 2
      }
    });

    await findButtonByText(clickNumberPage).trigger('click');

    expect(wrapper.emitted().pagechanged).toStrictEqual([[1]]);
  });

  it('click next arrow', async () => {
    const clickNumberPage = '›';
    createComponent({
      propsData: {
        totalLength: 20,
        perPage: 5,
        currentPage: 2
      }
    });

    await findButtonByText(clickNumberPage).trigger('click');

    expect(wrapper.emitted().pagechanged).toStrictEqual([[3]]);
  });

  it('click firstPage arrow', async () => {
    const clickNumberPage = '«';
    createComponent({
      propsData: {
        totalLength: 20,
        perPage: 5,
        currentPage: 3
      }
    });

    await findButtonByText(clickNumberPage).trigger('click');

    expect(wrapper.emitted().pagechanged).toStrictEqual([[1]]);
  });

  it('click lastPage arrow', async () => {
    const clickNumberPage = '»';
    createComponent({
      propsData: {
        totalLength: 20,
        perPage: 5,
        currentPage: 1
      }
    });
    await findButtonByText(clickNumberPage).trigger('click');

    expect(wrapper.emitted().pagechanged).toStrictEqual([[4]]);
  });
});
