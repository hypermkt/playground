<template>
  <div id="app">
    <h2>Multi Selection</h2>
    selected: {{ selected }}
    <button @click="consoleLog()">console.log(JSON.stringify(this.selected))</button>
    <p><v-select multiple v-model="selected" :options="options"></v-select></p>
  </div>
</template>

<script>
import vSelect from "vue-select"
export default {
  components: {vSelect},

  data() {
    return {
      selected: null,
      options: ['foo','bar','baz']
    }
  },
  watch: {
    selected() {
      console.log(JSON.stringify(this.selected));
    }
  },
  methods: {
    consoleLog: function() {
      console.log(JSON.stringify(this.selected));
    }
  }
}
</script>
