<template>
  <div>
    <select v-model="pref" @change="prefChanged">
      <option value="">---select---</option>
      <option value="tokyo">Tokyo</option>
      <option value="osaka">Osaka</option>
    </select>
    <p>selected: {{ pref }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pref: ''
    }
  },
  methods: {
    prefChanged() {
      console.log("prefChanged:" + this.pref)
    }
  }
}
</script>
