import{setBadgePosition}from'./helpers';export function createShadowDom(a){return a.createShadowRoot()}export function updateShadowDom(a,b){const c=setBadgePosition(a.modifiers,a.value),d=Number.isInteger(a.value)?a.value:a.value.value;b.innerHTML=`
    <style>
    :host::after {
      content: '${d}';
      position: absolute;
      right: ${c.right||'unset'};
      top: ${c.top||'unset'};
      bottom: ${c.bottom||'unset'};
      left: ${c.left||'unset'};
      font-size: .8em;
      background: #00796bcc;
      align-items: center;
      justify-content: center;
      display: flex;
      color: white;
      width: 18px;
      font-weight: 600;
      height: 18px;
      border-radius: 50%;
    }
    </style>
    <content></content>
  `}