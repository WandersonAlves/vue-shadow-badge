const generatePositioning = (position, bindingValue) => {
  const positioningObject = {
    top: bindingValue.top || '0',
    bottom: bindingValue.bottom,
    right: bindingValue.right || '-18px',
    left: bindingValue.left
  };
  let stringToReturn = '';
  if (position['down-left']) {
    positioningObject.bottom = '-6px';
    positioningObject.left = '-18px';
    delete positioningObject.top;
    delete positioningObject.right;
  }
  else if (position['down-right']) {
    positioningObject.bottom = '-6px';
    positioningObject.right = '-18px';
    delete positioningObject.left;
    delete positioningObject.top;
  }
  else if (position['up-left']) {
    positioningObject.top = '0';
    positioningObject.left = '-18px';
    delete positioningObject.bottom;
    delete positioningObject.right;
  }
  else if (position['up-right']) {
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
  console.warn(stringToReturn)
  return stringToReturn;

}

export function setBadgePosition(position, bindingValue) {
  if (position['down-left']) {
    return {
      bottom: '-6px',
      left: '-18px'
    };
  } else if (position['down-right']) {
    return {
      bottom: '-6px',
      right: '-18px'
    };
  } else if (position['up-left']) {
    return {
      top: '0',
      left: '-18px'
    };
  } else {
    return {
      top: '0',
      right: '-18px'
    };
  }
}

export function canThisBrowserUseShadowDom() {
  return (document.head.createShadowRoot || document.head.attachShadow);
}

export function setElementToRelative(el) {
  if (window.getComputedStyle(el).getPropertyValue('position') !== 'relative') {
    el.style.position = 'relative';
  }
}

export function generateStyle(content, position, binding) {
  generatePositioning(position, binding.value);
  return `
    content: '${content}';
    position: absolute;
    ${position.right ? `right: ${position.right};` : ''}
    ${position.top ? `top: ${position.top};` : ''}
    ${position.bottom ? `bottom: ${position.bottom};` : ''}
    ${position.left ? `left: ${position.left};` : ''}
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
