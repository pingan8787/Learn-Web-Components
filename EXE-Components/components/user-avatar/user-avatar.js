import { getAttributes } from '../../utils/index.js';
import { isFun, isStr, warpFun, runFun } from '../../utils/utils.js';

const defaultConfig = {
    // 属性
    userAvatar: "./assets/images/default_avatar.png",
    userName: "",
    subName: "",
    avatarWidth: "40px",
    avatarRadius: "50%",
    buttonRadius: "6px",
    buttonColor: "#999",
    buttonText: "打开",
    disableButton: false,

    // 事件
    onAvatarClick: null,
    onButtonClick: null,
}

export default class EXEUserAvatar extends HTMLElement {
    // 指定观察到的属性变化，attributeChangedCallback 会起作用
    static get observedAttributes() { return ['disabled','icon','loading','href','htmltype'] }
    shadowRoot = null;
    config = defaultConfig;

    constructor() {
        super();
        this.render();
    }

    render() {
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.renderHTML();
    }

    renderHTML() {
        // 当前业务暂时不需要 slot
        const { 
            userName, avatarWidth, avatarRadius, buttonRadius, 
            userAvatar, buttonColor, subName, buttonText, disableButton
        } = this.config;
        return `
            <style>
                :host{
                    color: "green";
                    font-size: "30px";
                }
                .exe-avatar {
                    display: flex;
                }
                .exe-avatar-img {
                    width: ${avatarWidth};
                    height: ${avatarWidth};
                    margin-right: 12px;
                }
                .exe-avatar-img .img {
                    width: 100%;
                    height: 100%;
                    border-radius: ${avatarRadius};
                    border: 1px solid #efe7e7;
                }
                .exe-avatar-text {
                    font-size: 14px;
                    flex: 1;
                }
                .exe-avatar-text .text {
                    color: #666;
                }
                .exe-avatar-button {
                    width: 60px;
                    display: flex;
                    align-items: center;
                }
                .exe-avatar-button .button {
                    border: 1px solid ${buttonColor};
                    color: ${buttonColor};
                    font-size: 12px;
                    text-align: center;
                    padding: 4px 10px;
                    border-radius: ${buttonRadius};
                    cursor: pointer;
                }
            </style>
            <div class="exe-avatar">
                <div class="exe-avatar-img">
                    <img class="img" src="${userAvatar}" />
                </div>
                <div class="exe-avatar-text">
                    <div class="name">
                        <span class="name-text">${userName}</span>
                        <span class="user-attach">
                            <slot name="name-slot"></slot>
                        </span>
                    </div>
                    <div class="text">
                    <span>${subName}</span>
                    <span><slot name="sub-name-slot"></slot></span>
                    </div>
                </div>
                ${
                    !disableButton && `<div class="exe-avatar-button">
                        <div class="button">${buttonText}</div>
                    </div>`
                }

            </div>
        `
    }


    connectedCallback() {
        console.log('[connectedCallback]');
        this.updateStyle();
        this.initEventListen();
    }

    initEventListen() {
        const { onAvatarClick, onButtonClick } = this.config;
        if(isStr(onAvatarClick)){
            this.addEventListener('click', e => runFun(e, onAvatarClick));
        }

        if(isStr(onButtonClick)){
            this.buttonElem = this.shadowRoot.querySelector('.exe-avatar-button .button');
            this.buttonElem?.addEventListener('click', e => runFun(e, onButtonClick));
        }
    }

    updateStyle() {
        this.config = {...defaultConfig, ...getAttributes(this)}; // 合并配置
        this.shadowRoot.innerHTML = this.renderHTML();
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