<template>
  <div>
    <p>{{ foo.msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'child',
  props: ['foo']
}
</script>
