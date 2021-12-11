import renderTemplate from './template.js';
import { Shared, Utils } from '../../utils/index.js';

const { getAttributes } = Shared;
const { isStr, runFun } = Utils;

const defaultConfig = {
    // 属性
    userName: "",
    subName: "",
    disableButton: false,

    // 事件
    onAvatarClick: null,
    onButtonClick: null,
}

export default class EXEUserAvatar extends HTMLElement {
    // 指定观察到的属性变化，attributeChangedCallback 会起作用
    // static get observedAttributes() { return ['disabled','icon','loading','href','htmltype'] }
    shadowRoot = null;
    config = defaultConfig;

    constructor() {
        super();
        this.render();
    }

    render() {
        this.shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.updateStyle();
        this.initEventListen();
    }

    initEventListen() {
        const { onAvatarClick } = this.config;
        if(isStr(onAvatarClick)){
            this.addEventListener('click', e => runFun(e, onAvatarClick));
        }
    }

    updateStyle() {
        this.config = {...defaultConfig, ...getAttributes(this)};
        this.shadowRoot.innerHTML = renderTemplate(this.config);
    }

    get _user_name() {
        return this.getAttribute('e-user-name');
    }

    get _avatar_width() {
        return this.getAttribute('e-avatar-width');
    }

    get _button_radius() {
        return this.getAttribute('e-button-radius');
    }

}

if (!customElements.get('exe-user-avatar')) {
    customElements.define('exe-user-avatar', EXEUserAvatar)
}