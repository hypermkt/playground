<template>
    <div>
        <h2>Counter</h2>
        <button v-on:click="increment()">Count Up</button>
        <input id="number-input" v-model="count" type="text" @input="changeCount" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'hello',
  data() {
    return {
      count: ''
    }
  },
  methods: {
    ...mapActions(['increment']),
    changeCount() {
      if (isFinite(this.count)) {
        this.$store.dispatch('input_number', this.count)
      }
    }
  }
}
</script>
