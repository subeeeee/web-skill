<template lang="pug">
  .conSelf
    div {{limit}}
    com-self(v-if="limit" :limit="limit - 1")
    div {{limit}}
</template>

<script>
	export default {
		name: "com-self",
    props: {
			limit: {
				type: Number,
        required: true
      }
    }
	}
</script>

<style scoped>

</style>
