<template lang="pug">
  .conSelf
    com-self(v-if="limit" :limit="limit - 1")
    span {{limit}}
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
