## Presantation
* Vue コンポーネントのユニットテスト
* 自己紹介
    * GMOペパボ バーチー
    * PHPカンファレンス2016「PHPerのためのVue.js入門とVue.js 2.0の未来」
    * YAPC::qqHokkaido「Vue.jsによるWebアプリケーション開発」
* テスト書いていますか
    * テストがないコードはレガシーコード
* Vue コンポーネントのテスト
    * 単純なメソッドのテストは簡単
    * ルーター, HTTP等が絡むと難しい
    * 様々なライブラリを利用した方法がある。悩ましい。
* もっと簡単にコンポーネントのテストが書けないものか？
    * Vue.js用テストライブラリだ
* Vue.js用テストライブラリ
    * vue-test
    * avoriaz
    * vue-testing
    * revue
    * vue-unit
    * [vuenit](https://github.com/jackmellis/vuenit)
* 共通の概念
    * Shallow/Full Rendering
    * DOM Event Trigger
    * Vuex, Router, HTTPのモック/スタブ
    * Assertion
    * DOM Selector
* どれも１年以内に生まれている
    * vue-test
        * Initial commit: 2016/8/19
    * avoriaz
        * Initial commit: 2017/1/10
    * vuenit
        * Initial commit: 2017/1/19
    * vue-testing
        * Initial commit: 2017/1/29
    * revue
        * Initial commit: 2017/4/12
    * vue-unit
        * Initial commit: 2017/4/28
* 恐らくみんなが同じことを思っている。公式のテストライブラリが無いだろうか？
* 2017/5/4 Vue.jsフォーラム
    * 「Vueコアでユニットテストを簡単にするための何かが行われていますか？」というスレッドが立った
        * https://forum.vuejs.org/t/is-anything-being-done-in-core-vue-to-make-unit-testing-easier/7431
    * 背景：ユニットテストを簡単に同じ目的で開発されたライブラリが、GitHub上に２，３個存在する。
    * 疑問：もしVueコアでユニットテストを簡単にするプロジェクトが進行していたら、これらは不要になるのでは？
    * 回答：公式のテストライブラリとして vue-test-utils を開発することを決定。@eddyerburgh氏のavoriaz が一番成熟しており開発にも協力してくれるとのことで、これベースに進める。
* vue-test-utils
    * avoriaz開発者の@eddyerburgh氏がメインで開発中
    * vue-test, revue, vue-unit, vuenit の開発が意見を出し合い
    * 開発は終盤。初期TODOの8割完了。
    * 現在ドキュメント準備中
    * 近々β版がリリースされそうな予感
* vue-test-utilsの設計方針
* 今日はあまり詳しく話さない
    * 開発中かつβ版すら未リリースのものなので、今後設計が変わる可能性もある
    * 次回 Vue.js meetup#5までにリリースされていることを期待
* 先ほども言ったとおり、vue-test-utilsはavoriaz開発者が、avoriazの設計をほぼ踏襲して開発している
* 今日はavoriaz
* avoriaz を知ればvue-test-utilsを知ることが出来る。また乗り換えも可能。
* avoriaz is 何？
    * Vue.js用テストライブラリ
* avoriazの機能
    * jQueryライクなセレクター
    * DOMイベントトリガー
    * Shallow, Fullレンダリング
    * props, dataセット
* 前提
    * Karma + mocha + chai
    * avoriaz v2.2
* 基本的な使い方
```js
// Hello.vue
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
```

```js
// Hello.without_avoriaz.spec.js
import Vue from 'vue'
import Hello from '../../src/components/Hello.vue'

describe('avoriaz無しのテストケース', () => {
  it('h1タグは、dataのmsgを利用して正しくレンダリングされているか', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).to.be.eql('Welcome to Your Vue.js App')
  })
})
```

```js
// Hello.with_avoriaz.spec.js
import { mount } from 'avoriaz'
import Hello from '../../src/components/Hello.vue'

describe('avoriaz有りのテストケース', () => {
  it('h1タグは、dataのmsgを利用して正しくレンダリングされているか', () => {
    const wrapper = mount(Hello)
    expect(wrapper.find('h1')[0].text()).to.be.eql('Welcome to Your Vue.js App')
  })
})
```
* 基本亭な組み合わせ
    * mount
        * フルレンダリングされたコンポーネントのラッパーを返す。
    * find
        * jQueryライクなセレクタ: タグ, CSS, 属性, ID
    * text
        * ラッパーのテキストコンテンツを返す。 
* Shallowレンダリング
    * 全ての子コンポーネントをスタブ化したVueコンポーネントのラッパーを返す。
```html
<template>
  <div>
    <h1>{{ msg }}</h1>
    <child :foo="foo"></child>
  </div>
</template>

<script>
import Child from './Child2.vue'

export default {
  components: {
    'child': Child
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      foo: { msg: 'Bar' }
    }
  }
}
</script>
```

```js
import HelloWithChild from '../../src/components/HelloWithChild.vue'
import { shallow } from 'avoriaz'

describe('shallow', () => {
  it('shallow', () => {
    const wrapper = shallow(HelloWithChild)
    expect(wrapper.find('h1')[0].text()).to.be.eql('Welcome to Your Vue.js App')

    // childコンポーネントはコメントアウトに変換されている
    expect(wrapper.html()).to.be.eql('<div><h1>Welcome to Your Vue.js App</h1> <!----></div>')
  })
})
```
* shallowレンダリングのメリット
    * 対象のコンポーネントのテストにだけ集中できる
    * テスト対象のコンポーネントが、親であればあるほどテストがしづらい
* DOMイベントトリガー
* まとめ
    * vue-test-utilsは、開発中なので今後どうなるかまだ分からない。
    * avoriazを利用すれば、簡単にコンポーネントのテストが書けるようになる。
    * avoriazとvue-test-utilsはAPIがn割同じなので、乗り換えを見越してavorazを今から使うのがお勧め。

## メモ
* computed propertyのテスト
* vue-test-utilsの主な機能
    * shallow
    * コンポーネントのスタブ
    * jQueryライクセレクター

    * ２つのレンダリングモード: deep, real DOM vs. shallow, virtual DOM
    * Both modes with ideally the same traversal / event simulation / assertion API
    * コンポーネント/ルーター/ストアの簡易スタブ機能
    * Jestスナップショット用シリアライズされたスナップショットの出力機能
        * ref: [進化したJestのスナップショット機能でReactコンポーネントを効率よくテストする \- WPJ](https://www.webprofessional.jp/test-react-components-jest-2/)
    * テストランナーへの非依存
* vue-test-utils is 何？
    * Utilities for testing Vue components
        * Vueコンポーネントのテスト用ユーティリティ
    * 2017/6/1より開発

## 参考
* [VuexのActions, Getters, Modulesを利用したコンポーネントをavoriazでテストする \- Qiita](http://qiita.com/hypermkt/items/56c094a1b51e6bc3d909)
* [Vue\.js用テストライブラリ「avoriaz」入門 \- Qiita](http://qiita.com/hypermkt/items/850bf20a8ad43c13fd05)
* [eddyerburgh/avoriaz: 🔬 a Vue\.js testing utility library](https://github.com/eddyerburgh/avoriaz)
* [vuejs/vue\-test\-utils: Utilities for testing Vue components](https://github.com/vuejs/vue-test-utils)
* [jackmellis/vuenit: Vue Unit Test Helpers for server\-side testing of client\-side code](https://github.com/jackmellis/vuenit)
* [callumacrae/vue\-test: Component testing for Vue\.js](https://github.com/callumacrae/vue-test)
* [BosNaufal/vue\-testing: Let's make Vue Testing And Mocking Become Easier And Much Fun](https://github.com/BosNaufal/vue-testing)
* [codebryo/revue: Revue provides a helpful interface for testing Vue components](https://github.com/codebryo/revue)
* [wrseward/vue\-unit: Component testing utilities for Vue\.js](https://github.com/wrseward/vue-unit)
