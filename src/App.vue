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
  mounted() {
    // Check support for shadow dom
    if (document.head.createShadowRoot || document.head.attachShadow) {
      console.log('yay, it works');
    }
    else {
      console.log('sad');
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
}
</style>
