import renderTemplate from './template.js';
import { Shared, Utils } from '../../utils/index.js';

const { getAttributes } = Shared;
const { isStr, runFun } = Utils;

const defaultConfig = {
    // 属性
    buttonRadius: "6px",
    buttonPrimary: "default",
    buttonText: "打开",
    disableButton: false,

    // 事件
    onButtonClick: null,
}

const Selector = "exe-button";

export default class EXEButton extends HTMLElement {

    static get observedAttributes() { 
        return ['e-button-type','e-button-text', 'buttonType', 'buttonText']
    }

    shadowRoot = null;
    config = defaultConfig;

    constructor(){
        super();
        this.render();
    }

    render() {
        this.shadowRoot = this.attachShadow({mode: 'closed'});
    }

    connectedCallback() {
        this.updateStyle();
        this.initEventListen();
    }

    attributeChangedCallback (name, oldValue, newValue) {
        // console.log('属性变化', name)
    }

    updateStyle() {
        this.config = {...defaultConfig, ...getAttributes(this)};
        this.shadowRoot.innerHTML = renderTemplate(this.config);
    }

    initEventListen() {
        const { onButtonClick } = this.config;
        if(isStr(onButtonClick)){
            const canClick = !this.disabled && !this.loading
            this.addEventListener('click', e => canClick && runFun(e, onButtonClick));
        }
    }

    get disabled () {
        return this.getAttribute('disabled') !== null;
    }

    get type () {
        return this.getAttribute('type') !== null;
    }

    get loading () {
        return this.getAttribute('loading') !== null;
    }
}

if (!customElements.get(Selector)) {
    customElements.define(Selector, EXEButton)
}
