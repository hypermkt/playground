<template>
  <div>
      <header-component></header-component>
      <p class="blue">This is App component!</p>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
    components: {
        'header-component': Header
    }
}
</script>

<style>
.blue {
	color: blue;
}
</style>
