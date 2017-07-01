import Vue from 'vue'
import Hello from '../../src/components/Hello.vue'

describe('Test without avoriaz', () => {
  let vm
  const Constructor = Vue.extend(Hello)

  beforeEach(() => {
    vm = new Constructor({
      propsData: {
        user: {
          nickname: 'John'
        }
      }
    }).$mount()
  })

  it('dataオブジェクトに指定の値が入っているか', () => {
    expect(vm.$data.msg).to.be.eql('Welcome to Your Vue.js App')
  })

  it('helloメソッドの返り値は正しいか', () => {
    expect(Hello.methods.hello()).to.be.eql('world')
  })

  it('h1タグは、dataのmsgを利用して正しくレンダリングされているか', () => {
    expect(vm.$el.querySelector('h1').textContent).to.be.eql('Welcome to Your Vue.js App')
  })

  it('h3タグは、dataのmsgを利用して正しくレンダリングされているか', () => {
    expect(vm.$el.querySelector('p').textContent).to.be.eql('nickname: John')
  })

  it('user情報は、propsで正しく渡されているか', () => {
    expect(vm.$props.user.nickname).to.be.eql('John')
  })
})
