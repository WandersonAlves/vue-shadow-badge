import Vue from 'vue';
import {
  createShadowDom,
  updateShadowDom
} from './utils/shadow-dom';
import {
  canThisBrowserUseShadowDom,
  setElementToRelative
} from './utils/helpers';

import {
  createBadgeFallback
} from './utils/fallback';

const make = (el, binding) => {
  if (binding.value.useShadowDom !== false && canThisBrowserUseShadowDom()) {
    setElementToRelative(el)
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
    if (binding.value) {
      setElementToRelative(el);
      createBadgeFallback(el, binding);
    }
  } 
}

/**
 * Badge directive using shadowDOM
 * accept the following values: 
 * {value: number, right: number, left: number, top: number, bottom: number, styles: string, useShadowDom: boolean}
 */
export default Vue.directive('badge', make);
