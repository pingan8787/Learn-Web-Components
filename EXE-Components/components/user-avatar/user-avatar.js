import { getAttributes } from '../../utils/index.js';

const defaultConfig = {
    userName: "",
    avatarWidth: "40px",
    avatarRadius: "50%",
    buttonRadius: "6px"
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
        const { userName, avatarWidth, avatarRadius, buttonRadius } = this.config;
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
                    border: 1px solid #aaa;
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
                .exe-avatar-button .follow {
                    border: 1px solid #999;
                    color: #999;
                    font-size: 12px;
                    text-align: center;
                    padding: 4px 10px;
                    border-radius: ${buttonRadius};
                    cursor: pointer;
                }
            </style>
            <div class="exe-avatar">
                <div class="exe-avatar-img">
                    <img class="img" src="https://up.enterdesk.com/edpic_360_360/b1/c3/6f/b1c36fcf1c10cb1dfbd26f96c3f74fd3.jpg" />
                </div>
                <div class="exe-avatar-text">
                    <div class="name">
                        <span class="name-text">${userName}</span>
                        <span class="user-attach">勋章1</span>
                    </div>
                    <div class="text">福建省厦门市思明区</div>
                </div>
                <div class="exe-avatar-button">
                    <div class="follow">关注</div>
                </div>
            </div>
        `
    }


    connectedCallback() {
        console.log('[connectedCallback]');
        this.updateStyle();
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