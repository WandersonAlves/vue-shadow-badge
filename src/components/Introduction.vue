<template>
  <section>
    <div class="area-separator">
      <h1 v-badge="{value: 1, right: '-20px', top: '-4px'}">How it works?</h1>
      <p>vue-shadow-badge uses the <a href="https://caniuse.com/#feat=shadowdom" target="_blank">Shadow DOM</a> feature from Chrome (thus, only work on Chrome).</p>
      <p>It inserts a ::after element on the choosen element very easily.</p>
    </div>
    <div class="area-separator">
      <h1 v-badge="badge2Config">Examples</h1>
      <div class="flex-row">
        <div class="flex-item-column">
          <p>Badge on a Button!</p>
          <button-outline v-badge="{
            value: buttonCounter,
            right: '-25px',
            top: '-4px',
            styles: buttonBadgeStyle
          }" msg="Click Me!" @click.native="buttonCounter++"></button-outline>
        </div>
      </div>
    </div>
    
  </section>
</template>
<script>
import Badge from '../directives/Badge/';
import ButtonOutline from '../components/ButtonOutline.vue';

export default {
  data() {
    return {
      buttonCounter: 1,
      badge2Config: {
        value: 2,
        right: '-20px',
        top: '-4px'
      },
      buttonBadgeStyle: `
        border: 2px solid #662a24;
        color: #662a24;
        background-color: transparent;
        font-size: 0.9em;
      `
    }
  },
  directives: {
    Badge
  },
  components: {
    ButtonOutline
  }
}
</script>
<style lang="scss" scoped>
section {
  margin: 120px 0;
  padding: 0 15%;
  word-break: break-all;
  line-height: 25px;

  .flex-row {
    display: flex;

    > div {
      margin-right: 40px;
    }
  }

  .area-separator {
    margin: 40px 0;
  }

  .flex-item-column {
    display: flex;
    flex-direction: column;
    width: 25%;
  }

  h1 {
    display: inline-block;
    color: #372466;
    font-size: 1.2em;
    cursor: pointer;
    margin: 10px 0;
    width: auto;

    &::before {
      content: '# ';
    }
  }

  p {
    margin: 10px 0;
  }
}
</style>
