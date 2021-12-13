(function () {
    'use strict';

    var renderTemplate$2 = config => {
        const { avatarWidth, avatarRadius, avatarSrc } = config;
        return `
        <style>
            .exe-avatar {
                width: ${avatarWidth};
                height: ${avatarWidth};
                display: inline-block;
                cursor: pointer;
            }
            .exe-avatar .img {
                width: 100%;
                height: 100%;
                border-radius: ${avatarRadius};
                border: 1px solid #efe7e7;
            }
        </style>
        <div class="exe-avatar">
            <img class="img" src="${avatarSrc}" />
        </div>
    `
    };

    const ComponentFlag = 'e-';  // 组件库元素标签属性的 Flag 
    const EventFlag = 'on';  // 组件库元素方法属性的 Flag

    /**
     * 将自定义符号分隔的字符串，转换为小驼峰 
     * TODO: 待支持自定义符号，目前支持 -
     * @param {*} text 
     * @returns {string}
     */
    const textToUpperCase = text => {
        if(!text) return '';
        return text.replace(/-(\w)/g, (all,letter) => letter.toUpperCase());
    };
    /**
     * 判断目标是否为指定类型
     * @param {any} target 
     * @param {string} type 
     * @returns {boolean}
     */
    const isType = (target, type) => target && type && typeof target === type;

    /**
     * 判断参数是否为函数
     * @param {any} target 
     * @returns {boolean} 是否为函数
     */
    const isFun = target => isType(target, 'function');

    /**
     * 判断参数是否为函数
     * @param {any} t 
     * @returns {boolean} 是否为函数
     */
     const isStr$3 = target => isType(target, 'string');

    /**
     * 将函数字符串包装成一个可执行函数
     * @param {string} fnStr
     * @returns {function}
     */
    const warpFun = fnStr => {
        if(!fnStr || typeof fnStr !== 'string') return () => {};
        return Function(fnStr);
    };

    /**
     * 执行指定方法，并阻止默认事件
     * @param {event}} $event 
     * @param {function} fn 
     */
    const runFun$3 = ($event, fn) => {
        if(!fn) return;
        $event.stopPropagation();
        $event.preventDefault();
        isStr$3(fn) && (fn = warpFun(fn));
        fn();
    };

    var Utils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        textToUpperCase: textToUpperCase,
        isType: isType,
        isFun: isFun,
        isStr: isStr$3,
        warpFun: warpFun,
        runFun: runFun$3
    });

    // 业务相关的工具

    /**
     * 获取 Custom elements 上所有属性的键值对
     * @param {HTMLElement} elem 
     * @returns 
     */
    const getAttributes$3 = elem => {
        if(!elem) return {};
        const attrs = {};
        const attrSource = Object.values(elem.attributes);
        
        attrSource &&
        attrSource.length > 0 &&
        attrSource.forEach(ele => {
            const { name, value } = ele;
            if(
                name.startsWith(ComponentFlag) || // 自定义属性处理
                name.startsWith(EventFlag) // 自定义事件处理
            ){
                const _name = textToUpperCase(name.replace(ComponentFlag, '')); // 转换为小驼峰的名称
                attrs[_name] = value;
            }
        });

        return attrs;
    };

    /**
     * 将属性对象，转换为字符串
     * 例如：将 { a: 'aa', b: 'bb'} 转换为 a="aa" b="bb"
     * @param {object} attrs 需要处理的属性对象
     * @returns 
     */
    const renderAttrStr$1 = attrs => {
        if(!attrs || typeof attrs !== 'object') return;
        const keys = Object.keys(attrs);
        return keys.length > 0 && 
        keys.reduce((pre, cur) => 
            pre + (attrs[cur] ? `${cur}="${attrs[cur]}" ` : '')
        , '')
    };

    var Shared = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getAttributes: getAttributes$3,
        renderAttrStr: renderAttrStr$1
    });

    const { getAttributes: getAttributes$2 } = Shared;
    const { isStr: isStr$2, runFun: runFun$2 } = Utils;

    const defaultConfig$2 = {
        // 属性
        avatarWidth: "40px",
        avatarRadius: "50%",
        avatarSrc: "./assets/images/default_avatar.png",

        // 事件
        onAvatarClick: null,
    };

    const Selector$1 = "exe-avatar";

    class EXEAvatar extends HTMLElement {
        shadowRoot = null;
        config = defaultConfig$2;

        constructor(){
            super();
            this.render();
        }

        render() {
            this.shadowRoot = this.attachShadow({mode: 'closed'});
            this.shadowRoot.innerHTML = renderTemplate$2(this.config);
        }

        connectedCallback() {
            this.updateStyle();
            this.initEventListen();
        }

        updateStyle() {
            this.config = {...defaultConfig$2, ...getAttributes$2(this)};
            this.shadowRoot.innerHTML = renderTemplate$2(this.config);
        }

        initEventListen() {
            const { onAvatarClick } = this.config;
            // console.log('[this.config]', this.config)
            if(isStr$2(onAvatarClick)){
                this.addEventListener('click', e => runFun$2(e, onAvatarClick));
            }
        }
    }

    if (!customElements.get(Selector$1)) {
        customElements.define(Selector$1, EXEAvatar);
    }

    const borderStyle = {
        solid: 'solid',
        dashed: 'dashed'
    };

    const buttonTypeMap = {
        default: { textColor: '#222', bgColor: '#FFF', borderColor: '#222'},
        primary: { textColor: '#FFF', bgColor: '#5FCE79', borderColor: '#5FCE79'},
        text: { textColor: '#222', bgColor: '#FFF', borderColor: '#FFF'},
    };

    var renderTemplate$1 = config => {
        const { buttonRadius, buttonText, buttonType } = config;

        const borderStyleCSS = buttonType 
            && borderStyle[buttonType] 
            ? borderStyle[buttonType] 
            : borderStyle['solid'];

        const backgroundCSS = buttonType 
            && buttonTypeMap[buttonType] 
            ? buttonTypeMap[buttonType] 
            : buttonTypeMap['default'];

        return `
        <style>
            .exe-button {
                border: 1px ${borderStyleCSS} ${backgroundCSS.borderColor};
                color: ${backgroundCSS.textColor};
                background-color: ${backgroundCSS.bgColor};
                font-size: 12px;
                text-align: center;
                padding: 4px 10px;
                border-radius: ${buttonRadius};
                cursor: pointer;
                display: inline-block;
                height: 28px;
            }
            :host([disabled]) .exe-button{ 
                cursor: not-allowed; 
                pointer-events: all; 
                border: 1px solid #D6D6D6;
                color: #ABABAB;
                background-color: #EEE;
            }
            :host([loading]) .exe-button{ 
                cursor: not-allowed; 
                pointer-events: all; 
                border: 1px solid #D6D6D6;
                color: #ABABAB;
                background-color: #F9F9F9;
            }
        </style>
        <button class="exe-button">${buttonText}</button>
    `
    };

    const { getAttributes: getAttributes$1 } = Shared;
    const { isStr: isStr$1, runFun: runFun$1 } = Utils;

    const defaultConfig$1 = {
        // 属性
        buttonRadius: "6px",
        buttonPrimary: "default",
        buttonText: "打开",
        disableButton: false,

        // 事件
        onButtonClick: null,
    };

    const Selector = "exe-button";

    class EXEButton extends HTMLElement {

        static get observedAttributes() { 
            return ['e-button-type','e-button-text', 'buttonType', 'buttonText']
        }

        shadowRoot = null;
        config = defaultConfig$1;

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
            this.config = {...defaultConfig$1, ...getAttributes$1(this)};
            this.shadowRoot.innerHTML = renderTemplate$1(this.config);
        }

        initEventListen() {
            const { onButtonClick } = this.config;
            if(isStr$1(onButtonClick)){
                const canClick = !this.disabled && !this.loading;
                this.addEventListener('click', e => canClick && runFun$1(e, onButtonClick));
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
        customElements.define(Selector, EXEButton);
    }

    class EXEAttachmentsList extends HTMLElement {
        constructor() {
            super();
            this.render();
        }

        render() {
        }
    }

    if (!customElements.get('exe-attachments-list')) {
        customElements.define('exe-attachments-list', EXEAttachmentsList);
    }

    class EXECommentFooter extends HTMLElement {
        constructor() {
            super();
            this.render();
        }

        render() {
        }
    }

    if (!customElements.get('exe-comment-footer')) {
        customElements.define('exe-comment-footer', EXECommentFooter);
    }

    class EXEPostList extends HTMLElement {
        constructor() {
            super();
            this.render();
        }

        render() {
        }
    }

    if (!customElements.get('exe-post-list')) {
        customElements.define('exe-post-list', EXEPostList);
    }

    const { renderAttrStr } = Shared;

    var renderTemplate = config => {
        const { 
            userName, avatarWidth, avatarRadius, buttonRadius, 
            avatarSrc, buttonType = 'primary', subName, buttonText, disableButton,
            onAvatarClick, onButtonClick
        } = config;
        return `
        <style>
            :host{
                color: "green";
                font-size: "30px";
            }
            .exe-user-avatar {
                display: flex;
                margin: 4px 0;
            }
            .exe-user-avatar-text {
                font-size: 14px;
                flex: 1;
            }
            .exe-user-avatar-text .text {
                color: #666;
            }
            .exe-user-avatar-text .text span {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
            exe-avatar {
                margin-right: 12px;
                width: ${avatarWidth};
            }
            exe-button {
                width: 60px;
                display: flex;
                justify-content: end;
            }
        </style>
        <div class="exe-user-avatar">
            <exe-avatar
                ${renderAttrStr({
                    'e-avatar-width': avatarWidth,
                    'e-avatar-radius': avatarRadius,
                    'e-avatar-src': avatarSrc,
                })}
            ></exe-avatar>
            <div class="exe-user-avatar-text">
                <div class="name">
                    <span class="name-text">${userName}</span>
                    <span class="user-attach">
                        <slot name="name-slot"></slot>
                    </span>
                </div>
                <div class="text">
                    <span class="name">${subName}<slot name="sub-name-slot"></slot></span>
                </div>
            </div>
            ${
                !disableButton && 
                `<exe-button
                    ${renderAttrStr({
                        'e-button-radius' : buttonRadius,
                        'e-button-type' : buttonType,
                        'e-button-text' : buttonText,
                        'on-avatar-click' : onAvatarClick,
                        'on-button-click' : onButtonClick,
                    })}
                ></exe-button>`
            }

        </div>
    `
    };

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
    };

    class EXEUserAvatar extends HTMLElement {
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
        customElements.define('exe-user-avatar', EXEUserAvatar);
    }

}());
