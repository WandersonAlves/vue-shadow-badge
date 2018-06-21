import Vue from 'vue';
import {
  createShadowDom,
  updateShadowDom
} from './utils/shadow-dom';

const make = (el, binding) => {
  if (window.getComputedStyle(el).getPropertyValue('position') !== 'relative') {
    console.warn('Component MUST be position: relative, setting then for you :3');
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

/**
 * Badge directive using shadowDOM
 * accept the following values: 
 * {value: number, right: number, left: number, top: number, bottom: number, styles: string}
 */
export default Vue.directive('badge', make);
