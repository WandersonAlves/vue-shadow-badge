import {
  generateStyle
} from './helpers';

export function createShadowDom(el) {
  return el.createShadowRoot();
}

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
