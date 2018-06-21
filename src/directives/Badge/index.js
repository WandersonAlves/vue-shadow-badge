import Vue from 'vue';
import {
  createShadowDom,
  updateShadowDom
} from './utils/shadow-dom';
import {
  canThisBrowserUseShadowDom
} from './utils/helpers';

const make = (el, binding) => {
  if (canThisBrowserUseShadowDom()) {
    if (window.getComputedStyle(el).getPropertyValue('position') !== 'relative') {
      el.style.position = 'relative';
    }
    if (binding.value) {
      if (el.shadowRoot) {
        let root = el.shadowRoot;
        updateShadowDom(binding, root);
      } else {
        let root = createShadowDom(el, binding);
        updateShadowDom(binding, root)
      }
    }
  }
  else {
    throw "Your browser doesn't support shadow dom";
  } 
}

/**
 * Badge directive using shadowDOM
 * accept the following values: 
 * {value: number, right: number, left: number, top: number, bottom: number, styles: string}
 */
export default Vue.directive('badge', make);
