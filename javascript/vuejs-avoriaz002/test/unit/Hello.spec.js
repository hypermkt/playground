import Hello from '../../src/components/Hello.vue'
import { mount } from 'avoriaz'

describe('avoriaz test', () => {
  describe('mount', () => {
    it('contains', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.contains('img')).to.be.eql(true)
      expect(wrapper.contains('h1')).to.be.eql(true)
      expect(wrapper.contains('h2')).to.be.eql(true)
    })

    it('data', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      let msg = 'Hello World'
      wrapper.setData({msg: msg})
      expect(wrapper.find('h1')[0].text()).to.be.eql(msg)
      expect(wrapper.data().msg).to.be.eql(msg)
    })

    it('find', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.find('h2').length).to.be.eql(2)
      expect(wrapper.find('h2')[0].is('h2')).to.be.eql(true)
    })

    it('hasAttribute', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.hasAttribute('id', 'hello')).to.be.eql(true)
    })

    it('instance', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.instance().hello()).to.be.eql('world')
      expect(wrapper.instance().msg).to.be.eql('Welcome to Your Vue.js App')
    })

    it('isVueComponent', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.isVueComponent).to.be.eql(true)
    })

    it('methods', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.methods().hello()).to.be.eql('world')
    })

    it('name', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.name()).to.be.eql('hello')
    })

    it('is', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      // ref: https://eddyerburgh.gitbooks.io/avoriaz/content/api/mount/is.html
      expect(wrapper.find('div#hello h2')[0].is('h2')).to.be.eql(true)
    })

    it('propsData', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.find('h3')[0].text()).to.be.eql('nickname: John')

      // propsDataを使用すると「warning: functions returned by propsData() will not have this bound to the vue instance. Calling a propsData function that uses this will result in an error. You can access propsData functions by using the vue instance. e.g. to call a method function named propsDataFunc, call wrapper.vm.$props.propsDataFunc(). See https://github.com/eddyerburgh/avoriaz/issues/15」が表示されたので、wrapper.vmに変更
      expect(wrapper.propsData().user.nickname).to.be.eql('John')

      // ref: https://eddyerburgh.gitbooks.io/avoriaz/content/api/mount/vm.html
      // expect(wrapper.vm.user.nickname).to.be.eql('John')
    })

    it('text', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.find('h1')[0].text()).to.be.eql('Welcome to Your Vue.js App')
    })

    it('vm', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })
      expect(wrapper.vm.user.nickname).to.be.eql('John')
    })
  })

  describe('selectors', () => {
    it('tag selectors', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })

      // タグを指定する
      const div = wrapper.find('div')[0]
      expect(div.is('div')).to.be.eql(true)

      // 子孫要素指定
      const img1 = wrapper.find('div img')[0]
      expect(img1.is('img')).to.be.eql(true)

      // 子要素指定
      const img2 = wrapper.find('div > img')[0]
      expect(img2.is('img')).to.be.eql(true)
    })

    it('id selectors', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })

      const hello = wrapper.find('#hello')[0]
      expect(hello.is('div')).to.be.eql(true)
    })

    it('class selectors', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })

      const subtitle = wrapper.find('.subtitle')[0]
      expect(subtitle.is('h2')).to.be.eql(true)
    })

    it('attribute selectors', () => {
      const wrapper = mount(Hello, {
        propsData: {
          user: {nickname: 'John'}
        }
      })

      const src1 = wrapper.find('[src]')[0]
      expect(src1.is('img')).to.be.eql(true)

      const src2 = wrapper.find('[src="http://vuejs.org/images/logo.png"]')[0]
      expect(src2.is('img')).to.be.eql(true)

      const src3 = wrapper.find("[src='http://vuejs.org/images/logo.png']")[0]
      expect(src3.is('img')).to.be.eql(true)
    })
  })
})
