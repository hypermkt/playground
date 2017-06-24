<template>
  <div>
    {{ msg  }}
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      msg: 'This is child method.'
    }
  }
}
</script>
