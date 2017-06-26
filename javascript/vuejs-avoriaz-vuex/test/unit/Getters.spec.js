import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import 'babel-polyfill' // Error: [vuex] vuex requires a Promise polyfill in this browser.対策
import Getters from '../../src/components/Getters.vue'

Vue.use(Vuex)

describe('Getters.vue', () => {
  describe('Mocking Getters', () => {
    let getters;
    let store;

    beforeEach(() => {
      getters = {
        animal: () => 'cat'
      }
      store = new Vuex.Store({
        getters
      })
    })

    it('Pタグをレンダリングして、文字列が表示されている', () => {
      const wrapper = mount(Getters, { store })
      const p = wrapper.find('p')[0]
      expect(p.text()).to.be.eql(getters.animal())
    })
  })
})
