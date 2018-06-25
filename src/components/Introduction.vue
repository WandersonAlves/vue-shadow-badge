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
          <button-outline v-badge="{
            value: buttonCounter,
            right: '-25px',
            top: '-4px',
            styles: buttonBadgeStyle
          }" msg="Click Me!" @click.native="buttonCounter++">
          </button-outline>
        </div>
        <span v-badge="{value: 5, styles: spanBadgeStyle, useShadowDom: false}">Within a span element!</span>
      </div>
      <div class="flex-row">
        <div class="image-wrapper" v-badge="{value: 3, right: '88px', styles: vueBadgeStyle}">
          <img class="image" src="../assets/logo.png"/>
          <span>Wrap images in a div to add the badge, see <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=234020" target="_blank">this bug</a></span>
        </div>
        <div class="image-wrapper" v-badge="{value: 3, right: '88px', styles: vueBadgeStyle, useShadowDom: false}" >
          <img class="image" src="../assets/logo.png"/>
          <span>Without shadowDom, wrap images in a div, see <a href="https://stackoverflow.com/questions/7396469/why-dont-before-and-after-pseudo-elements-work-with-img-elements" target="_blank">this anwser</a></span>
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
      `,
      spanBadgeStyle: `
        background-color: black;
        color: white;
        font-size: 1em;
        border: 2px solid white;
        right: -24px;
      `,
      vueBadgeStyle: `
        background-color: #41b883;
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
  word-break: break-word;
  line-height: 25px;

  @media screen and (max-width: 768px) {
    padding: 0 7%;
  }

  .image-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 0.8em;
    }
  }

  .image {
    width: 92px;
    height: 92px;
  }

  .flex-row {
    display: flex;
    margin-bottom: 40px;

    > * {
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
    margin: 20px 0;
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
