import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import 'babel-polyfill' // Error: [vuex] vuex requires a Promise polyfill in this browser.対策
import Modules from '../../src/components/Modules.vue'
import counter from '../../src/store/modules/counter'

Vue.use(Vuex)

describe('Modules.vue', () => {
  describe('Mocking Actions', () => {
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
      const wrapper = mount(Modules, { store })
      const input = wrapper.find('input')[0]
      input.element.value = 100
      input.trigger('input')
      expect(actions.input_number.calledOnce).to.be.eql(true)
    })

    it('inputタグの数値以外が入力されinputイベントが発火したら、store アクションのinput_numberが呼ばれない', () => {
      const wrapper = mount(Modules, { store })
      const input = wrapper.find('input')[0]
      input.element.value = 'string'
      input.trigger('input')
      expect(actions.input_number.calledOnce).to.be.eql(false)
    })

    it('ボタンがクリックされたら、storeアクションのincrementが呼ばれる', () => {
      const wrapper = mount(Modules, { store })
      wrapper.find('button')[0].trigger('click')
      expect(actions.increment.calledOnce).to.be.eql(true)
    })
  })

  describe('Mocking Getters', () => {
    let getters;
    let store;

    beforeEach(() => {
      getters = {
        current_count: () => 0
      }
      store = new Vuex.Store({
        getters
      })
    })

    it('h3内をレンダリングして、カウントが表示されている', () => {
      const wrapper = mount(Modules, { store })
      const h3 = wrapper.find('h3')[0]
      expect(h3.text()).to.be.eql('Count: 0')
    })
  })

  describe('Mocking with Modules', () => {
    let actions;
    let state;
    let store;

    beforeEach(() => {
      state = {
        counter: {
          count: 0
        }
      }
      actions = {
        increment: sinon.stub(),
        input_number: sinon.stub(),
      }
      store = new Vuex.Store({
        state,
        actions,
        getters: counter.getters
      })
    })

    it('モジュールを利用した場合', () => {
      const wrapper = mount(Modules, { store })
      const button = wrapper.find('button')[0]
      button.trigger('click')
      expect(actions.increment.calledOnce).to.be.eql(true)
    })
  })
})
