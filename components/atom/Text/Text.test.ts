import { shallowMount } from '@vue/test-utils'
import Text from './Text.vue';

const doMount = (props: Object) => {
  return shallowMount(Text, {
    props,
    slots: { default: 'Hello World' }
  });
}

describe('🧪 Text', () => {

  test('Renders as p element', () => {
    const wrapper = doMount({ p: true });

    expect(wrapper.findAll('p').length).toBe(1);
  })
})
