<template>
  <div>
    <div
      v-if="mode == 'text'"
      @click="toEditor()"
    ><h4 class="title is-4">{{ message }}</h4></div>
    <div
      v-else
      @keypress.enter="toText()"
      class="field">
      <div class="control">
        <input class="input" type="text" v-model="message" placeholder="Text input">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'コーヒー 300円',
      mode: 'text'
    }
  },
  methods: {
    toEditor() {
      this.mode = 'editor'
    },
    toText() {
      this.mode = 'text'
    }
  }
}
</script>
