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
    expect(wrapper.findAll('Tile').length).toBeFalsy();
  })

  test('testing with data', async () => {
    const wrapper = await shallowMount(SearchContainer);
    console.log(wrapper.vm); // Todo:: have a look why this returns an emty object
  })
})