(function () { 'use strict'
  var createApp = function () {
    // ---------------------
    // 通常のアプリケーションコード
    // ---------------------

    // クライアントサイドのコードが読み込み後にそれを引き継げるよう、
    // id "app"をルートノードにもつメインの Vue インスタンスが
    // 返却されなければなりません。
    return new Vue({
      template: '<div id="app">Helo PHPカンファレンス{{ year }}!</div>',
      data: {
        year: 2016
      }
    })

    // -------------------
    // 通常のアプリケーションコード 終わり
    // -------------------
  }
  // SSR時はこちらを通る
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = createApp
  // ブラウザアクセス時はこちらを通る
  } else {
    this.app = createApp()
  }
}).call(this)
