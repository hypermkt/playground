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

  it('ボタンが押されたら、APIが1回呼ばれる with avoriaz', () => {
    stub = sinon.stub(api, 'signup')

    // buttonタグのclickイベントを発火させる
    const wrapper = mount(Event)
    const button = wrapper.find('button')[0]
    button.trigger('click')

    expect(stub.calledOnce).to.be.true
  })

  it('ボタンが押されたら、APIが1回呼ばれる without avoriaz', () => {
    stub = sinon.stub(api, 'signup')

    // buttonタグのclickイベントを発火させる
    const Constructor = Vue.extend(Event)
    const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('button')
    const event = document.createEvent('HTMLEvents')
    event.initEvent('click', true, true)
    button.dispatchEvent(event)

    expect(stub.calledOnce).to.be.true
  })
})
