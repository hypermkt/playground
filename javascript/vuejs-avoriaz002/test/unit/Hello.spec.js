import Vue from 'vue'
import Hello from '../../src/components/Hello.vue'
import { mount } from 'avoriaz'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('h1').textContent).to.be.eql('Welcome to Your Vue.js App')
  })

  it('avoriaz: should render correct contents', () => {
    const wrapper = mount(Hello)
    expect(wrapper.find('h1')[0].text()).to.be.eql('Welcome to Your Vue.js App')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
