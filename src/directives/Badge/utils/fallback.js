import {
  generateStyle,
  setBadgePosition
} from './helpers';

export function createBadgeFallback(el, binding) {
  let style = document.createElement('style');
  
  const content = Number.isInteger(binding.value) ? binding.value : binding.value.value;
  const position = setBadgePosition(binding.modifiers, binding.value);
  const styleString = generateStyle(content, position, binding);

  const timestamp = (new Date().getTime() / 1000).toString().replace('.', '');
  const attrName = `badge-${timestamp}`;

  el.setAttribute(attrName, '');

  style.innerHTML = `.vue-shadow-badge[${attrName}]::after {
    ${styleString}
  }`

  document.getElementsByTagName('head')[0].appendChild(style);

  el.className = `${el.className} vue-shadow-badge`
}