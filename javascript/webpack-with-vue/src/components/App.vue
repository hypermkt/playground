<template>
  <div>
      <header-component></header-component>
      This is main contents.
      This is main contents.
      <footer-component></footer-component>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    components: {
        'header-component': Header,
        'footer-component': Footer,
    }
}


</script>

<style>
</style>
