import {
  generateStyle,
  setBadgePosition
} from './helpers';

export function createBadgeFallback(el, binding) {
  let style = document.createElement('style');
  let className;
  
  const content = Number.isInteger(binding.value) ? binding.value : binding.value.value;
  const position = setBadgePosition(binding.modifiers, binding.value);
  const styleString = generateStyle(content, position, binding);

  Object.keys(el.dataset).forEach((key, index) => {
    if (index === 0) {
      if (key[0] === 'v' && key[1] !== '-') {
        className = `data-v-${key.substr(1, key.length-1).toLowerCase()}`
      }
      else {
        className = `data-${key}`;
      }
    }
  })

  console.log(el.dataset, className)

  style.innerHTML = `.vue-shadow-badge[${className}]::after {
    ${styleString}
  }`

  document.getElementsByTagName('head')[0].appendChild(style);

  el.className = `${el.className} vue-shadow-badge`
}