import Vue from 'vue';
import App from './components/App.vue';

window.onload = function() {
  new Vue(App).$mount('#app');
}
