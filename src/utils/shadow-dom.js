export function createShadowDom(el) {
    return el.createShadowRoot();
}

export function updateShadowDom(content, root) {
    root.innerHTML = `
      <style>
      :host::after {
        content: '${content}';
        position: absolute;
        right: 26px;
        top: 18px;
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
    `;
}
