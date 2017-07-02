<template>
  <div>
    <button @click="signup">Sign up</button>
  </div>
</template>

<script>
import api from '../libs/api'

export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    signup: () => {
      api.signup()
    }
  }
}
</script>
