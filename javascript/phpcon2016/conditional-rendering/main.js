// main.js
new Vue({
  el: '#app',
  data: {
    isApplied: false
  },
  methods:  {
    apply: function() {
      this.isApplied = true;
    }
  }
});
