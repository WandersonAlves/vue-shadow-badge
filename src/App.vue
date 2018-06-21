<template>
  <div id="app">
    <h1 v-badge="3">Oi</h1>
  </div>
</template>

<script>
import Badge from './directives/Badge';

export default {
  name: 'app',
  directives: {
    Badge
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
