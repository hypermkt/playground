// main.js
new Vue({
  el: '#app',
  data: {
    message: '∥熱湯風呂∥'
  },
  // ライフサイクルフック：created
  // インスタンスが作成された後に呼ばれる
  created: function() {
    setTimeout(function() {
      alert('押せよー！'); 
    }, 5000);
  },
  // Vue インスタンスに組み込まれるメソッド宣言箇所
  methods: {
    push: function() {
      this.message = '訴えてやる！';
    }
  }
});
