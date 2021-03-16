<template lang="pug">
  .business
    com-self(
      :limit="5"
    )
    span this is business
</template>

<script>

	import ComSelf from "./components/ComSelf";
	export default {
		name: "business",
		components: {ComSelf}
	}
</script>

<style scoped>

</style>
