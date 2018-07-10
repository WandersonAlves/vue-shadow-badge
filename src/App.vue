<template>
  <div id="app">
    <jumbo />
    <Introduction />
  </div>
</template>

<script>
import Jumbo from './components/Jumbo.vue';
import Introduction from './components/Introduction.vue';

export default {
  name: 'app',
  components: {
    Jumbo,
    Introduction
  },
}
</script>

<style lang="scss">
* {
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
}
</style>
