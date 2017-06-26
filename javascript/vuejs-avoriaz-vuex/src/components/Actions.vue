<template>
    <div class="text-align-center">
        <input type="text" v-model="name" @input="actionInput" />
        <button @click="actionClick()">Click</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default{
    data () {
      return {
        name: ''
      }
    },
    methods: {
      ...mapActions([
        'actionClick',
      ]),
      actionInput() {
        if (this.name === 'cat') {
          this.$store.dispatch('actionInput', this.name);
        }
      },
    },
  };
</script>
