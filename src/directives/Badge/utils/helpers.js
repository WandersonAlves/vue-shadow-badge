const generatePositioning = (values, modifiers) => {
  const positioningObject = {
    top: values.top || '0',
    bottom: values.bottom,
    right: values.right || '-18px',
    left: values.left
  };
  let stringToReturn = '';
  if (modifiers['down-left']) {
    positioningObject.bottom = '-6px';
    positioningObject.left = '-18px';
    delete positioningObject.top;
    delete positioningObject.right;
  }
  else if (modifiers['down-right']) {
    positioningObject.bottom = '-6px';
    positioningObject.right = '-18px';
    delete positioningObject.left;
    delete positioningObject.top;
  }
  else if (modifiers['up-left']) {
    positioningObject.top = '0';
    positioningObject.left = '-18px';
    delete positioningObject.bottom;
    delete positioningObject.right;
  }
  else if (modifiers['up-right']) {
    positioningObject.top = '0';
    positioningObject.right = '-18px';
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

export function canThisBrowserUseShadowDom() {
  return (document.head.createShadowRoot || document.head.attachShadow);
}

export function setElementToRelative(el) {
  if (window.getComputedStyle(el).getPropertyValue('position') !== 'relative') {
    el.style.position = 'relative';
  }
}

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
