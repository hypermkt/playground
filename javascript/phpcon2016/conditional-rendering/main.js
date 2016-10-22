// main.js
new Vue({
  el: '#app',
  data: {
    isHandRaised: false
  },
  methods:  {
    raiseHand: function() {
      this.isHandRaised = true;
    }
  }
});
