import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import 'babel-polyfill' // Error: [vuex] vuex requires a Promise polyfill in this browser.対策
import Actions from '../../src/components/Actions.vue'

Vue.use(Vuex)

describe('Actions.vue', () => {
  describe('Mocking Actions', () => {
    let actions;
    let store;

    beforeEach(() => {
      actions = {
        actionClick: sinon.stub(),
        actionInput: sinon.stub(),
      }
      store = new Vuex.Store({
        state: {},
        actions
      })
    })

    it('inputタグに「cat」が入力されinputイベントが発火したら、store アクションのactionInputが呼ばれる', () => {
      const wrapper = mount(Actions, { store })
      const input = wrapper.find('input')[0]
      input.element.value = 'cat'
      input.trigger('input')
      expect(actions.actionInput.calledOnce).to.be.eql(true)
    })

    it('inputタグに「dog」が入力されinputイベントが発火したら、store アクションのactionInputが呼ばれない', () => {
      const wrapper = mount(Actions, { store })
      const input = wrapper.find('input')[0]
      input.element.value = 'dog'
      input.trigger('input')
      expect(actions.actionInput.calledOnce).to.be.eql(false)
    })

    it('ボタンがクリックされたら、actionClickが呼ばれる', () => {
      const wrapper = mount(Actions, { store })
      wrapper.find('button')[0].trigger('click')
      expect(actions.actionClick.calledOnce).to.be.eql(true)
    })
  })
})
