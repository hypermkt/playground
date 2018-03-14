<template>
  <div>
    <h1>This is header component.</h1>
    {{ message }}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'Hello Vue.js2'
    }
  }
}
</script>

<style>
</style>
