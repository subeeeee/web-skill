<template lang="pug">
  .app
    router-view
    //keep-alive
      router-view(v-if='$route.meta.keepAlive')
    // router-view(v-if='!$route.meta.keepAlive')
</template>
<script>
  import Layout from './layout'
  export default {
  	mounted() {
  		console.log(this.$route)
		}
	}
</script>
<style lang="scss">
</style>
