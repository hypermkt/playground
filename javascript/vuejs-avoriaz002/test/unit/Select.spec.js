import Vue from 'vue'
import Select from '../../src/components/Select.vue'
import { mount } from 'avoriaz'

describe('Select.vue', () => {
  it('文字列が入力されたら、APIが1回呼ばれる with avoriaz', () => {
    const wrapper = mount(Select)
    const option = wrapper.find('option')[1]
    option.element.selected = true

    // MEMO: I have no idea why it's not fired a change event on select tag. It's sucks.
    wrapper.find('select')[0].trigger('change')
    expect(wrapper.find('p')[0].text()).to.be.eq('selected: tokyo')
  })
})
