<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: []
}
</script>

<style lang="scss">
@import 'styles/core.scss';

#app {
  background: lighten($dark, 95%);
  padding: 5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
