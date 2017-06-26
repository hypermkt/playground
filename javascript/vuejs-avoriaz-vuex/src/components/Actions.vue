<template>
    <div class="text-align-center">
        <input type="text" v-model="animal_name" @input="actionInput" />
        <button @click="actionClick()">Click</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default{
    data () {
      return {
        animal_name: ''
      }
    },
    methods: {
      ...mapActions([
        'actionClick',
      ]),
      actionInput() {
        if (this.animal_name === 'cat') {
          this.$store.dispatch('actionInput', this.animal_name);
        }
      },
    },
  };
</script>
