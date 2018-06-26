import {
  generateStyle
} from './helpers';
/**
 * Creates the shadowRoot for the element
 * @param {HTMLElement} el 
 */
export function createShadowDom(el) {
  return el.createShadowRoot();
}
/**
 * Replace current shadowRoot with a new one
 * @param {Object} binding 
 * @param {ShadowRoot} root 
 */
export function updateShadowDom(binding, root) {
  const content = Number.isInteger(binding.value) ? binding.value : binding.value.value;
  root.innerHTML = `
    <style>
    :host::after {
      ${generateStyle(content, binding)}
    }
    </style>
    <content></content>
  `;
}
