/**
 * 在custom element的构造函数中，可以指定多个不同的回调函数，它们将会在元素的不同生命时期被调用：

 * connectedCallback：当 custom element首次被插入文档DOM时，被调用。
 * disconnectedCallback：当 custom element从文档DOM中删除时，被调用。
 * adoptedCallback：当 custom element被移动到新的文档时，被调用。
 * attributeChangedCallback: 当 custom element增加、删除、修改自身属性时，被调用。
 */

class CustomElementLifeCycle extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    // 指定观察到的属性，attributeChangedCallback 会起作用
    static get observedAttributes() {
        return ['my-color', 'my-width']
    }
    render() {
        const shadow = this.attachShadow({ mode: 'open' });
        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(div);
        shadow.appendChild(style);
    }


    connectedCallback() {
        console.log('[connectedCallback]元素被添加');
        updateStyle(this);
    }

    disconnectedCallback() {
        console.log('[disconnectedCallback]元素被删除');
    }

    adoptedCallback() {
        console.log('[adoptedCallback]元素被移动');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('[attributeChangedCallback]元素属性发生变化：', name, oldValue, newValue);
        updateStyle(this);
    }
}

customElements.define('custom-element-life-cycle', CustomElementLifeCycle)

const updateStyle = elem => {
    const shadow = elem.shadowRoot;
    const width = elem.getAttribute('my-width');
    const color = elem.getAttribute('my-color');
    shadow.querySelector('style').textContent = `
        div {
            width: ${width}px;
            height: ${width}px;
            background-color: ${color};
        }
    `;
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const init = () => {
    const create = document.getElementById('create-button');
    const change = document.getElementById('change-button');
    const remove = document.getElementById('remove-button');

    let square; // 存放方块元素

    change.disabled = true;
    remove.disabled = true;

    create.onclick = () => {
        square = document.createElement('custom-element-life-cycle');
        square.setAttribute('my-width', random(50, 300));
        square.setAttribute('my-color', 'red');
        document.body.appendChild(square);

        create.disabled = true;
        change.disabled = false;
        remove.disabled = false;
    }

    change.onclick = () => {
        square.setAttribute('my-width', random(100, 300));
        square.setAttribute('my-color', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
    }

    remove.onclick = () => {
        document.body.removeChild(square);
        create.disabled = false;
        change.disabled = true;
        remove.disabled = true;
    }
}


window.onload = function () {
    init();
}