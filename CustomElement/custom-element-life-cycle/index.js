/**
 * 在custom element的构造函数中，可以指定多个不同的回调函数，它们将会在元素的不同生命时期被调用：

 * connectedCallback：当 custom element首次被插入文档DOM时，被调用。
 * disconnectedCallback：当 custom element从文档DOM中删除时，被调用。
 * adoptedCallback：当 custom element被移动到新的文档时，被调用。
 * attributeChangedCallback: 当 custom element增加、删除、修改自身属性时，被调用。
 */

class CustomElementLifeCycle extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        // 获取组件的属性
        const userName = this.getAttribute('user-name');

        const shadow = this.attachShadow({mode: 'open'});
        const text = document.createElement('span');
        text.textContent = 'Hi Custom Element Attribute!Current user is ' + userName;
        text.style = 'color: red';
        shadow.append(text);
    }


    connectedCallback() {
        console.log('[connectedCallback]元素被添加');
    }

    disconnectedCallback() {
        console.log('[disconnectedCallback]元素被删除');
    }

    adoptedCallback() {
        console.log('[adoptedCallback]元素被移动');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('[attributeChangedCallback]元素属性发生变化：',name, oldValue, newValue);
    }
}

const init = () => {
    const remove = document.getElementById('remove-button');
    const change = document.getElementById('change-button');
    const elem = document.querySelector('custom-element-life-cycle');
    remove.onclick = function(){
        elem.remove()
    }
    change.onclick = function(){
        elem.setAttribute('user-name', 'leo')
        elem.setAttribute('current-name', 'leo')
    }
}

customElements.define('custom-element-life-cycle', CustomElementLifeCycle)

window.onload = function (){
    init();
}