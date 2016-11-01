// main.js
new Vue({
  el: '#app',
  data: {
    message: '好きな言語は何ですか？'
  },
  // ライフサイクルフック：created
  // インスタンスが作成された後に呼ばれる
  created: function() {
    setTimeout(function() {
      alert('早く答えてください！'); 
    }, 5000);
  },
  // Vue インスタンスに組み込まれるメソッド宣言箇所
  methods: {
    answer: function() {
      this.message = 'PHP!';
    }
  }
});
