import Vue from 'vue';

export default Vue.directive('badge', {
    update(el, binding) {
        if (window.getComputedStyle(el).getPropertyValue('position') !== 'relative') {
            throw 'Component MUST be position: relative';
        }
        if (binding.value) {
            if (el.shadowRoot) {
                let root = el.shadowRoot;
                updateShadowDom(binding.value, root);
            } else {
                let root = createShadowDom(el, binding);
                updateShadowDom(binding.value, root)
            }
        }
    }
})

function createShadowDom(el) {
    return el.createShadowRoot();
}

function updateShadowDom(content, root) {
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
