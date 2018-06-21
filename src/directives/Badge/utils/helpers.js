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
