import { shallowMount } from '@vue/test-utils'
import Heading from './Heading.vue';

const doMount = (props: Object) => {
  return shallowMount(Heading, {
    props,
    slots: { default: 'Hello World' }
  });
}

describe('🧪 Heading', () => {

  test('should render properly without any errors', () => {
    const spy = vi.spyOn(console, 'error')
    doMount({ h1: true });

    expect(spy).not.toHaveBeenCalled();
  });

  test('Renders as h1 element', () => {
    const wrapper = doMount({ h1: true });
    expect(wrapper.findAll('h1').length).toBe(1);
  })

  test('Renders as h2 element', () => {
    const wrapper = doMount({ h2: true });
    expect(wrapper.findAll('h2').length).toBe(1);
  })

  test('Dont render if is set wrong', () => {
    const wrapper = doMount({ h7: true });
    expect(wrapper.html()).toBeFalsy();
  })
})
