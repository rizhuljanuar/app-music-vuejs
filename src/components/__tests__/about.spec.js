import About from '@/views/About.vue';
import { shallowMount } from '@vue/test-utils';

describe('About.vue', () => {
  it('render inner text', () => {
    const wrapper = shallowMount(About);
    
    expect(wrapper.text()).toContain('about');
  })
})
