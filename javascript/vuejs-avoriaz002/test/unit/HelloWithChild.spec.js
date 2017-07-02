import HelloWithChild from '../../src/components/HelloWithChild.vue'
import { mount, shallow } from 'avoriaz'

describe('shallow', () => {
  it('mount', () => {
    const wrapper = mount(HelloWithChild)
    expect(wrapper.find('p')[0].text()).to.be.eql('Bar')
  })

  it('shallow', () => {
    const wrapper = shallow(HelloWithChild)
    expect(wrapper.find('h1')[0].text()).to.be.eql('Welcome to Your Vue.js App')
    expect(wrapper.html()).to.be.eql('<div><h1>Welcome to Your Vue.js App</h1> <!----></div>')
  })
})
