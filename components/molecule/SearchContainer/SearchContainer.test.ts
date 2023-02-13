import { shallowMount, VueWrapper } from '@vue/test-utils'
import SearchContainer from './SearchContainer.vue';
import searchData from '@mockdata/search.json';

describe('🧪 SearchContainer', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(SearchContainer);
  });

  test('should render properly without any errors', () => {
    const spy = vi.spyOn(console, 'error')
    expect(spy).not.toHaveBeenCalled();
  });

  test('renders empty without any data', () => {
    expect(wrapper.findAll('tile').length).toBeFalsy();
  })

  test('shows all tiles when the ref "searchItemResults" is mocked', async () => {
    const wrapper = shallowMount(SearchContainer, {
      global: {
        mocks: {
          searchItemResults: searchData
        }
      }
    });

    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('tile').length).toBe(10);
  })
})