<template>
  <div>
    <h1>{{ msg }}</h1>
    <child :foo="foo"></child>
  </div>
</template>

<script>
import Child from './Child2.vue'

export default {
  components: {
    'child': Child
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      foo: { msg: 'Bar' }
    }
  }
}
</script>
