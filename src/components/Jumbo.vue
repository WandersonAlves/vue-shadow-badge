<template>
  <section class="container">
    <div class="center">
      <h1 v-badge="{value: 3, styles: styles}">This is vue-shadow-badge</h1>
      <p>A simple way to add badges to any element!</p>
      <p>yarn add vue-shadow-badge or npm i --save vue-shadow-badge</p>
    </div>
  </section>
</template>
<script>
import Badge from '@/directives/Badge';

export default {
  data() {
    return {
      styles: `
        border-radius: 20px;
        background-color: white;
        color: black;
        box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.45);
        right: -20px;
      `
    }
  },
  directives: {
    Badge
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  background: linear-gradient(270deg, #372466, #662a24);
  background-size: 400% 400%;
  height: 75vh;
  width: 100%;
  -webkit-animation: GradientBackground 30s ease infinite;
  -moz-animation: GradientBackground 30s ease infinite;
  animation: GradientBackground 30s ease infinite;

  @-webkit-keyframes GradientBackground {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @-moz-keyframes GradientBackground {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @keyframes GradientBackground {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }

  .center {
    color: white;
    text-align: center;
    margin: auto;
  }

  h1 {
    display: inline-block;
  }
}
</style>


