import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import 'babel-polyfill' // Error: [vuex] vuex requires a Promise polyfill in this browser.対策
import Hello from '../../src/components/Hello.vue'

Vue.use(Vuex)

describe('Hello.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      increment: sinon.stub(),
      input_number: sinon.stub(),
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('inputタグの数値が入力されinputイベントが発火したら、store アクションのinput_numberが呼ばれる', () => {
    const wrapper = mount(Hello, { store })
    const input = wrapper.find('input')[0]
    input.element.value = 100
    input.trigger('input')
    expect(actions.input_number.calledOnce).to.be.eql(true)
  })

  it('inputタグの数値以外が入力されinputイベントが発火したら、store アクションのinput_numberが呼ばれない', () => {
    const wrapper = mount(Hello, { store })
    const input = wrapper.find('input')[0]
    input.element.value = 'string'
    input.trigger('input')
    expect(actions.input_number.calledOnce).to.be.eql(false)
  })
})
