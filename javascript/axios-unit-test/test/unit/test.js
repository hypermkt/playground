import Vue from 'vue';
import _Test from '../../test.vue';
import sinon from 'sinon';
import axios from 'axios';
import Promise from 'bluebird';

const Test = Vue.extend(_Test);

describe('Testコンポーネント', () => {

  it('fetchItemsでアイテム一覧が取得できる', (done) => {
    let items = [
      { name: 'Apple' }
    ];

    let resolved = new Promise.resolve({
      data: items
    })

    let stub = sinon.stub(axios, 'get').returns(resolved)

    const vm = new Test()
    vm.fetchItems();

    resolved.then(() => {
      expect(vm.items).to.be.eql(items)
      done()
    });

  })
})
