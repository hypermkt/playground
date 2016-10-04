var Vue = require('vue');
var Hello = require('./hello.vue');

new Vue({
  el: '#app',
  render: function(h) {
    return h(Hello);
  }
});
