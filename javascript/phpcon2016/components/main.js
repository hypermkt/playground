// main.js
Vue.component('header-component', {
  template: '<h1>phpcon 2016</h1>'
});

Vue.component('footer-component', {
  template: '<div>\
              <hr>\
              <center>All Rights Reserved.</center>\
             </div>'
});

new Vue({
  el: '#app',
  data: {
    message: '?> NEXT'
  }
});
