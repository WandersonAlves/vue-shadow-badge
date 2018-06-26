/**
 * Generate badge positioning
 * @param {Object} values 
 * @param {Object} modifiers 
 */
const generatePositioning = (values, modifiers) => {
  const LEFT_RIGHT_VALUE = modifiers['overlap'] ? '-9px' : '-18px';
  const TOP_BOTTOM_VALUE = modifiers['inline'] ? '0' : '-6px';
  const positioningObject = {
    top: values.top || TOP_BOTTOM_VALUE,
    bottom: values.bottom,
    right: values.right || LEFT_RIGHT_VALUE,
    left: values.left
  };
  let stringToReturn = '';
  if (modifiers['down-left']) {
    positioningObject.bottom = TOP_BOTTOM_VALUE;
    positioningObject.left = LEFT_RIGHT_VALUE;
    delete positioningObject.top;
    delete positioningObject.right;
  }
  else if (modifiers['down-right']) {
    positioningObject.bottom = TOP_BOTTOM_VALUE;
    positioningObject.right = LEFT_RIGHT_VALUE;
    delete positioningObject.left;
    delete positioningObject.top;
  }
  else if (modifiers['up-left']) {
    positioningObject.top = TOP_BOTTOM_VALUE;
    positioningObject.left = LEFT_RIGHT_VALUE;
    delete positioningObject.bottom;
    delete positioningObject.right;
  }
  else if (modifiers['up-right']) {
    positioningObject.top = TOP_BOTTOM_VALUE;
    positioningObject.right = LEFT_RIGHT_VALUE;
    delete positioningObject.bottom;
    delete positioningObject.left;
  }
  Object.keys(positioningObject).forEach(value => {
    if (positioningObject[value]) {
      stringToReturn += `${value}: ${positioningObject[value]};\n`;
    }
  });
  return stringToReturn;

}

/**
 * Check if current browser has support for shadow-dom
 */
export function canThisBrowserUseShadowDom() {
  return (document.head.createShadowRoot || document.head.attachShadow);
}

/**
 * If element is not relative, set it to relative
 * @param {HTMLElement} el 
 */
export function setElementToRelative(el) {
  if (window.getComputedStyle(el).getPropertyValue('position') !== 'relative') {
    el.style.position = 'relative';
  }
}
/**
 * Generate CSS attributes for current badge
 * @param {string|number} content 
 * @param {Object} binding
 */
export function generateStyle(content, binding) {  
  return `
    content: '${content}';
    position: absolute;
    ${generatePositioning(binding.value, binding.modifiers)}
    font-size: .6em;
    background: #00796bcc;
    align-items: center;
    justify-content: center;
    display: flex;
    color: white;
    width: 18px;
    font-weight: 600;
    height: 18px;
    border-radius: 50%;
    ${binding.value.styles}
  `
}
