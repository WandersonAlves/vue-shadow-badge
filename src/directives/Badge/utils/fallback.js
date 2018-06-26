import {
  generateStyle,
} from './helpers';

/**
 * Fallback if browser doesn't have support for shadow-dom or user set useShadowDom: false
 * @param {HTMLElement} el 
 * @param {Object} binding 
 */
export function createBadgeFallback(el, binding) {
  // Create a new style tag
  let style = document.createElement('style');
  // Generate the content of Badge
  const content = Number.isInteger(binding.value) ? binding.value : binding.value.value;
  // Get the CSS attributes to use in style
  const styleString = generateStyle(content, binding);
  // Generate a timestamp to avoid style collisions with another badges
  const timestamp = (new Date().getTime() / 1000).toString().replace('.', '');
  // Set our attr name
  const attrName = `badge-${timestamp}`;
  // Now the element have the attrName
  // ex: <input badge-36297362 />
  el.setAttribute(attrName, '');
  // Finally, create the final CSS class with a pseudo-element
  style.innerHTML = `.vue-shadow-badge[${attrName}]::after {
    ${styleString}
  }`;
  // Append our newly created class to the head of document
  document.getElementsByTagName('head')[0].appendChild(style);
  // Append the class to the element class list
  el.className = `${el.className} vue-shadow-badge`;
}