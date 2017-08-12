<template>
	<div>
		<link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.0.0/dist/vue-multiselect.min.css">
		<label class="typo__label">Custom option template</label>
		<multiselect v-model="value" :multiple="true" label="title" track-by="title" :options="options" :option-height="104" :custom-label="customLabel" :show-labels="false">
			<template slot="option" scope="props">
				<img class="option__image" :src="props.option.img">
				<div class="option__desc"><span class="option__title">{{ props.option.title }}</span><span class="option__small">{{ props.option.desc }}</span></div>
			</template>
		</multiselect>
		<pre class="language-json"><code>{{ value  }}</code></pre>
	</div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: null,
      options: [
        { title: 'chiba', desc: 'Makoto Chiba', img: 'https://avatars.slack-edge.com/2015-05-08/4787287488_5cdb45313c223b678927_192.jpg' },
        { title: 'makoto', desc: 'Makoto Chiba', img: 'https://avatars.slack-edge.com/2015-05-08/4787287488_5cdb45313c223b678927_192.jpg' },
      ]
    }
  },
  methods: {
    customLabel ({ title, desc }) {
      return `${title} – ${desc}`
    }
  }
}
</script>
