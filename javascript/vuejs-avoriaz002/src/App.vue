<template>
  <div id="app">
    <hello :user="user"></hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'app',
  data () {
    return {
      user: {
        nickname: 'John'
      }
    }
  },
  components: {
    Hello
  }
}
</script>
