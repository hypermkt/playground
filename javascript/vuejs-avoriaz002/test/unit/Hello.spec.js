import Hello from '../../src/components/Hello.vue'
import { mount } from 'avoriaz'

describe('Hello.vue', () => {
  it('Hello.vueはコンポーネント名は正しいか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    // wrapper.setProps({user: {nickname: 'John'}})
    expect(wrapper.name()).to.be.eql('hello')
  })

  it('Hello.vueはVueコンポーネントか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    expect(wrapper.isVueComponent).to.be.eql(true)
  })

  it('指定したタグは含まれているか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    expect(wrapper.contains('img')).to.be.eql(true)
    expect(wrapper.contains('h1')).to.be.eql(true)
    expect(wrapper.contains('h2')).to.be.eql(true)
  })

  it('h2タグは指定された数あるか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    expect(wrapper.find('h2').length).to.be.eql(2)
  })

  it('指定された属性はあるか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    expect(wrapper.hasAttribute('id', 'hello')).to.be.eql(true)
  })

  it('指定したエレメントに指定のタグがあるか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    // expect(wrapper.find('div#hello h2')[0].hasClass('subtitle')).to.be.eql(true)
    // ref: https://eddyerburgh.gitbooks.io/avoriaz/content/api/mount/is.html
    expect(wrapper.find('div#hello h2')[0].is('h2')).to.be.eql(true)
  })

  it('メソッドの返り値は正しいか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    expect(wrapper.instance().hello()).to.be.eql('world')
  })

  it('h1に指定されたテキストが表示されているか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    expect(wrapper.find('h1')[0].text()).to.be.eql('Welcome to Your Vue.js App')
  })

  it('dataに指定した値を渡した場合に、指定したメッセージに置き換わるか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    let msg = 'Hello World'
    wrapper.setData({msg: msg})
    expect(wrapper.find('h1')[0].text()).to.be.eql(msg)
  })

  it('propsで渡っていた値が表示されているか', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
    expect(wrapper.find('h3')[0].text()).to.be.eql('nickname: John')
    
    // propsDataを使用すると「warning: functions returned by propsData() will not have this bound to the vue instance. Calling a propsData function that uses this will result in an error. You can access propsData functions by using the vue instance. e.g. to call a method function named propsDataFunc, call wrapper.vm.$props.propsDataFunc(). See https://github.com/eddyerburgh/avoriaz/issues/15」が表示されたので、wrapper.vmに変更
    // expect(wrapper.propsData().user.nickname).to.be.eql('John')
    
    // ref: https://eddyerburgh.gitbooks.io/avoriaz/content/api/mount/vm.html
    expect(wrapper.vm.user.nickname).to.be.eql('John')
  })
})
//
// // also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
