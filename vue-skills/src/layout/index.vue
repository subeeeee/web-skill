<template lang="pug">
  .layout
    keep-alive
      router-view(v-if='$route.meta.keepAlive')
    router-view(v-if='!$route.meta.keepAlive')
</template>
<script>
  export default {
  	name: "layout"
  }
</script>
