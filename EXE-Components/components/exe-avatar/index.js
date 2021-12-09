import renderTemplate from './template.js';
import { Shared, Utils } from '../../utils/index.js';

const { getAttributes } = Shared;
const { isStr, runFun } = Utils;

const defaultConfig = {
    // 属性
    avatarWidth: "40px",
    avatarRadius: "50%",
    avatarSrc: "./assets/images/default_avatar.png",

    // 事件
    onAvatarClick: null,
}

const Selector = "exe-avatar";

export default class EXEAvatar extends HTMLElement {
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
        const { onAvatarClick } = this.config;
        // console.log('[this.config]', this.config)
        if(isStr(onAvatarClick)){
            this.addEventListener('click', e => runFun(e, onAvatarClick));
        }
    }
}

if (!customElements.get(Selector)) {
    customElements.define(Selector, EXEAvatar)
}
