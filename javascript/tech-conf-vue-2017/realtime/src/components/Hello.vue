<template>
  <div class="container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1
            v-if="siteTitleMode == 'text'"
            @click="siteTitleMode = 'editor'"
            class="title">
            {{ siteTitle }}
          </h1>
          <input
            v-else
            @keypress.enter="siteTitleMode = 'text'"
            v-model="siteTitle"
            style="width: 500px"
            class="input" type="text" placeholder="Text input">
        </div>
      </div>
    </section>

    <h3 class="title is-2">メニュー</h3>
    <button @click="addBottom()" class="button">+</button>
    <template v-for="component, key in components">
      <component v-bind:is="component.currentView"></component>
      <br >
    </template>
    <button @click="addBottom()" class="button">+</button>
  </div>
</template>

<script>
import Vue from 'vue'
import text from './block/text.vue'

export default {
  name: 'hello',
  components: {
    'block-text': text
  },
  data () {
    return {
      siteTitle: 'レストラングーペ',
      siteTitleMode: 'text',
      components: [
        { currentView: text },
      ]
    }
  },
  methods: {
    addTop() {
      this.components.unshift({ currentView: text })
    },
    addBottom() {
      this.components.push({ currentView: text })
    },
  }
}
</script>
