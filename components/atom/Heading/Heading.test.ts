import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Heading from './Heading.vue';

const doMount = (props: Object) => {
  return shallowMount(Heading, {
    props,
    slots: { default: 'Hello World' }
  });
}

describe('🧪 Heading', () => {

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
