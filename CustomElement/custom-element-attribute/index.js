/**
 * 获取组件的属性，可以通过 this.getAttribute(attrName) 获取
 */

class CustomElementAttribute extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        // 获取组件的属性
        const userName = this.getAttribute('user-name');

        const shadow = this.attachShadow({mode: 'open'});
        const text = document.createElement("span");
        text.textContent = 'Hi Custom Element Attribute!Current user is ' + userName;
        text.style = 'color: red';
        shadow.append(text);
    }
}

customElements.define('custom-element-attribute', CustomElementAttribute)