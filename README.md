# vue-shadow-badge!


[![GitHub stars](https://img.shields.io/github/stars/WandersonAlves/vue-shadow-badge.svg?style=flat-square)](https://github.com/WandersonAlves/vue-shadow-badge/stargazers)
[![GitHub license](https://img.shields.io/github/license/WandersonAlves/vue-shadow-badge.svg?style=flat-square)](https://github.com/WandersonAlves/vue-shadow-badge)


## Instalation

Use `yarn add vue-shadow-badge` or `npm i --save vue-shadow-badge`

## Motivation

In my search for badges, i only found component based badges, for me, this isn't the ideal, so a build a directive based badge that is extensible and highly configurable.

With shadow-dom is easy to create pseudo-elements in any element with a shadowRoot, just look at `src/directives/Badge/utils/shadow-dom.js`.

Sadly, shadow-dom isn't supported in all browsers, so keep in mind this.

https://caniuse.com/#feat=shadowdom

### But...

Now this directive have a fallback for browsers without shadow-dom. If you encounter something strange, please let me know it.

___

## Usage

Simple import globally or locally in your vue app.

Locally:

```
//SomeComponent.vue

import Badge from 'vue-shadow-badge';

export default {
  directives: {
    Badge
  }
}
```

Global:

```
//main.js (or another entry point)

import Vue from 'vue';
import App from './App.vue';
import Badge from 'vue-shadow-badge';

new Vue({
  render: h => h(App),
  directives: {
    Badge
  }
}).$mount('#app')
```

Now you can use your new directive like this:

`<h1 v-badge="badgeConfig">Examples</h1>`

or this:

`<button v-badge="3">Hi!</button>`

or even this:

`<span v-badge="{value: 54, right: '10px'}">`

___

`badgeConfig` accept some values:

| Prop   | Type   | Description                             |
|--------|--------|-----------------------------------------|
| value  | number | Sets the value on Badge                 |
| right  | string | Set the right value for badge placement |
| left   | string | Set the left value for badge placement  |
| down   | string | Set the down value for badge placement  |
| up     | string | Set the up value for badge placement    |
| styles | string | Customize your badge! (see above)       |

___

## Examples

```
<template>
<button-outline v-badge="{
  value: buttonCounter,
  right: '-25px',
  top: '-4px',
  styles: buttonBadgeStyle}" msg="Click Me!" @click.native="buttonCounter++">
</button-outline>
</template>
<script>
export default {
  data() {
    return {
      badgeConfig: {
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
    }
  }
}
</script>
```
You can use `styles` prop to set the positioning of the badge too! Just use `right|top|bottom|left: value`

## Contributing

This is a beginner friendly open source project. Submit your PR, let's discuss some improvements.
