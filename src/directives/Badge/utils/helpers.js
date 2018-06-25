export function setBadgePosition(position, bindingValue) {
  if (position['down-left']) {
    return {
      bottom: '0',
      left: '0'
    };
  } else if (position['down-right']) {
    return {
      bottom: '0',
      right: '0'
    };
  } else if (position['up-left']) {
    return {
      top: '0',
      left: '0'
    };
  } else if (position['up-right']) {
    return {
      top: '0',
      right: '0'
    };
  } else if (bindingValue.bottom || bindingValue.top || bindingValue.left || bindingValue.right) {
    return {
      bottom: bindingValue.bottom || 0,
      top: bindingValue.top || 0,
      left: bindingValue.left || 0,
      right: bindingValue.right || 0
    }
  }
  else {
    return {
      top: '0',
      right: '0'
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
  return `
    content: '${content}';
    position: absolute;
    right: ${position.right || 'unset'};
    top: ${position.top || 'unset'};
    bottom: ${position.bottom || 'unset'};
    left: ${position.left || 'unset'};
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
