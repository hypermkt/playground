new Vue({
  el: '#app',
  data: {
    mode: 'add',
    nippoCache: null,
    content: '', 
    nippoes: []
  },
  computed: {
    today: function() {
      return moment().format('YYYY年MM月DD日');
    }
  },
  methods: {
    addNippo: function() {
      this.nippoes.unshift({ date: moment().format('YYYY-MM-DD'), content: this.content })
      this.content = ''
      console.log(this.nippoes)
    },
    editNippo: function(nippo) {
      this.nippoCache = nippo
      this.content = nippo.content
      this.mode = 'edit'
    },
    updateNippo: function(nippo) {
      nippo.content = this.content 
      this.nippoCache = null
      this.mode = 'add'
      this.content = ''
    },
    deleteNippo: function(key) {
      Vue.delete(this.nippoes, key)
    },
    isAddMode: function() {
      return this.mode == 'add'
    }
  }
});
