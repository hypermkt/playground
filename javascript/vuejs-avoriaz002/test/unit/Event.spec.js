import Vue from 'vue'
import Event from '../../src/components/Event.vue'
import sinon from 'sinon'
import api from '../../src/libs/api'
import { mount } from 'avoriaz'

describe('Event.vue', () => {
  let stub

  afterEach(() => {
    stub.restore()
  });

  it('文字列が入力されたら、APIが1回呼ばれる with avoriaz', () => {
    stub = sinon.stub(api, 'checkAccount')

    const wrapper = mount(Event)
    wrapper.find('input')[0].trigger('input')

    expect(stub.calledOnce).to.be.true
  })

  it('文字列が入力されたら、APIが1回呼ばれる without avoriaz', () => {
    stub = sinon.stub(api, 'checkAccount')

    const Constructor = Vue.extend(Event)
    const vm = new Constructor().$mount()
    const input = vm.$el.querySelector('input')
    const event = document.createEvent('HTMLEvents')
    event.initEvent('input', true, true)
    input.dispatchEvent(event)

    expect(stub.calledOnce).to.be.true
  })
})
