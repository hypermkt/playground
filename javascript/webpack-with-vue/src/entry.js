import Vue from 'vue';
import Header from './components/Header.vue';

window.onload = function() {
  new Vue({
    el: '#app',
    components: {
      'site-header': Header
    },
    data: {
      message: 'Hello Vue'
    }
  });
}
