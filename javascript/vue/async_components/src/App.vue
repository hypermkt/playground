<template>
  <div id="app">
    <async-example></async-example>
    <hello></hello>
  </div>
</template>

<script>
import Vue from 'vue'
import Hello from './components/Hello.vue'

Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 3000)
})

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>
