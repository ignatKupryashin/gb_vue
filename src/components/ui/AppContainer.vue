<template>
<div class="container">
  <slot/>
</div>
</template>

<script>
export default {
  name: "AppContainer"
}
</script>


<style scoped lang="scss">
@import "@/scss/vars";
  .container {
    padding-left: calc( 50vw - $appWidth / 2);
    padding-right: calc( 50vw - $appWidth / 2);
  }
</style>
