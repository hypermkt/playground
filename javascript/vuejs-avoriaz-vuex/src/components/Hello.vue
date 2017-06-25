<template>
    <div>
        <h2>Counter</h2>
        <h3>Count: {{ current_count }}</h3>
        <button v-on:click="increment()">Count Up</button>
        <input id="number-input" v-model="input_count" type="text" @input="changeCount" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'hello',
  data() {
    return {
      input_count: ''
    }
  },
  computed: {
    ...mapGetters(['current_count'])
  },
  methods: {
    ...mapActions(['increment']),
    changeCount() {
      if (isFinite(this.input_count)) {
        this.$store.dispatch('input_number', this.input_count)
      }
    }
  }
}
</script>
