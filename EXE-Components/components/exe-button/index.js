import renderTemplate from './template.js';
import { Shared, Utils } from '../../utils/index.js';

const { getAttributes } = Shared;
const { isStr, runFun } = Utils;

const defaultConfig = {
    // 属性
    buttonRadius: "6px",
    buttonColor: "#999",
    buttonText: "打开",
    disableButton: false,

    // 事件
    onButtonClick: null,
}

const Selector = "exe-button";

export default class EXEButton extends HTMLElement {
    shadowRoot = null;
    config = defaultConfig;

    constructor(){
        super();
        this.render();
    }

    render() {
        this.shadowRoot = this.attachShadow({mode: 'closed'});
        this.shadowRoot.innerHTML = renderTemplate(this.config);
    }

    connectedCallback() {
        this.updateStyle();
        this.initEventListen();
    }

    updateStyle() {
        this.config = {...defaultConfig, ...getAttributes(this)};
        this.shadowRoot.innerHTML = renderTemplate(this.config);
    }

    initEventListen() {
        const { onButtonClick } = this.config;
        if(isStr(onButtonClick)){
            this.addEventListener('click', e => !this.disabled && runFun(e, onButtonClick));
        }
    }

    get disabled () {
        return this.getAttribute('disabled') !== null;
    }
}

if (!customElements.get(Selector)) {
    customElements.define(Selector, EXEButton)
}
