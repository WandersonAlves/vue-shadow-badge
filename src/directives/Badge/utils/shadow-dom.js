import {
  setBadgePosition
} from './helpers';

export function createShadowDom(el) {
  return el.createShadowRoot();
}

export function updateShadowDom(binding, root) {
  const position = setBadgePosition(binding.modifiers, binding.value);
  const content = Number.isInteger(binding.value) ? binding.value : binding.value.value;
  root.innerHTML = `
    <style>
    :host::after {
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
    }
    </style>
    <content></content>
  `;
}
