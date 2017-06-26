<template>
    <div>
        <p v-if="animal">{{animal}}</p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default{
    computed: mapGetters([
      'animal'
    ]),
  };
</script>