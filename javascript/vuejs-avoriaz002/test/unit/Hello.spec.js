import Hello from '../../src/components/Hello.vue'
import { mount, shallow } from 'avoriaz'

describe('avoriaz test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Hello, {
      propsData: {
        user: {nickname: 'John'}
      }
    })
  })

  describe('mount', () => {
    it('contains', () => {
      expect(wrapper.contains('img')).to.be.eql(true)
      expect(wrapper.contains('h1')).to.be.eql(true)
      expect(wrapper.contains('h2')).to.be.eql(true)
    })

    it('data', () => {
      expect(wrapper.find('h1')[0].text()).to.be.eql('Welcome to Your Vue.js App')
      expect(wrapper.data().msg).to.be.eql('Welcome to Your Vue.js App')
    })

    it('find', () => {
      expect(wrapper.find('h2').length).to.be.eql(1)
      expect(wrapper.find('h2')[0].is('h2')).to.be.eql(true)
    })

    it('hasAttribute', () => {
      expect(wrapper.hasAttribute('id', 'hello')).to.be.eql(true)
    })

    it('instance', () => {
      expect(wrapper.instance().hello()).to.be.eql('world')
      expect(wrapper.instance().msg).to.be.eql('Welcome to Your Vue.js App')
    })

    it('isVueComponent', () => {
      expect(wrapper.isVueComponent).to.be.eql(true)
    })

    it('methods', () => {
      expect(wrapper.methods().hello()).to.be.eql('world')
    })

    it('name', () => {
      expect(wrapper.name()).to.be.eql('hello')
    })

    it('is', () => {
      // ref: https://eddyerburgh.gitbooks.io/avoriaz/content/api/mount/is.html
      expect(wrapper.find('div#hello h2')[0].is('h2')).to.be.eql(true)
    })

    it('propsData', () => {
      expect(wrapper.find('p')[0].text()).to.be.eql('nickname: John')

      // propsDataを使用すると「warning: functions returned by propsData() will not have this bound to the vue instance. Calling a propsData function that uses this will result in an error. You can access propsData functions by using the vue instance. e.g. to call a method function named propsDataFunc, call wrapper.vm.$props.propsDataFunc(). See https://github.com/eddyerburgh/avoriaz/issues/15」が表示されたので、wrapper.vmに変更
      expect(wrapper.propsData().user.nickname).to.be.eql('John')

      // ref: https://eddyerburgh.gitbooks.io/avoriaz/content/api/mount/vm.html
      expect(wrapper.vm.user.nickname).to.be.eql('John')
    })

    it('text', () => {
      expect(wrapper.find('h1')[0].text()).to.be.eql('Welcome to Your Vue.js App')
    })

    it('vm', () => {
      expect(wrapper.vm.user.nickname).to.be.eql('John')
    })
  })

  describe('shallow', () => {
    it('isVueComponent', () => {
      expect(wrapper.isVueComponent).to.be.eql(true)
    })
  })

  describe('selectors', () => {
    it('tag selectors', () => {
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
      const hello = wrapper.find('#hello')[0]
      expect(hello.is('div')).to.be.eql(true)
    })

    it('class selectors', () => {
      const subtitle = wrapper.find('.subtitle')[0]
      expect(subtitle.is('h2')).to.be.eql(true)
    })

    it('attribute selectors', () => {
      const src1 = wrapper.find('[src]')[0]
      expect(src1.is('img')).to.be.eql(true)

      const src2 = wrapper.find('[src="http://vuejs.org/images/logo.png"]')[0]
      expect(src2.is('img')).to.be.eql(true)

      // ダブルコーテーション囲みでも問題ない
      const src3 = wrapper.find("[src='http://vuejs.org/images/logo.png']")[0]
      expect(src3.is('img')).to.be.eql(true)
    })
  })
})
