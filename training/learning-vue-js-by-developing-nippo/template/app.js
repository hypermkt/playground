new Vue({
  el: '#app',
  computed: {
    today: function() {
      return moment().format('YYYY年MM月DD日');
    }
  },
});
