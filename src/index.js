import Vue from 'vue';
import { createShadowDom ,updateShadowDom } from './utils/shadow-dom';

export default Vue.directive('badge', {
    update(el, binding) {
        if (window.getComputedStyle(el).getPropertyValue('position') !== 'relative') {
            throw 'Component MUST be position: relative';
        }
        if (binding.value) {
            if (el.shadowRoot) {
                let root = el.shadowRoot;
                updateShadowDom(binding.value, root);
            } else {
                let root = createShadowDom(el, binding);
                updateShadowDom(binding.value, root)
            }
        }
    }
})