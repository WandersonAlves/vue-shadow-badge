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
  // Check if the element tells not to use shadow-dom
  if (binding.value.useShadowDom !== false && canThisBrowserUseShadowDom()) {
    setElementToRelative(el);
    // Only set badge if el has a value
    if (binding.value) {
      // Check if el already have a shadowRoot attached
      // If has, override with new shadowRoot
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
    // Only set badge if el has a value
    if (binding.value) {
      setElementToRelative(el);
      createBadgeFallback(el, binding);
    }
  }
}

/**
 * @author Wanderson Alves <wandersonalvesferreira2012@gmail.com>
 * Badge directive using shadowDOM with fallback
 * @param { number } value
 * @param { string } right
 * @param { string } left
 * @param { string } top
 * @param { string } bottom
 * @param { string } styles
 * @param { boolean } useShadowDom
 */
export default Vue.directive('badge', make);
