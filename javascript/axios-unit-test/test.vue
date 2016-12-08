<template>
</template>

<script>
import axios from 'axios';

export default {
  data: () => {
    return {
      items: []
    }
  },
  methods: {
    fetchItems() {
      axios.get('/items').then((response) => {
        this.items = response.data;
      }).catch((response) => {
      });
    }
  }
}
</script>
