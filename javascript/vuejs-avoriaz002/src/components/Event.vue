<template>
  <div>
    Account: <input type="text" @input="checkAccount" >
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
    checkAccount: () => {
      api.checkAccount()
    }
  }
}
</script>
