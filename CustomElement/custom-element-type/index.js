/**
 * CustomElement 分为两种类型
 * 
 * Autonomous custom elements 是独立的元素，它不继承其他内建的HTML元素。
 * 可以直接把它们写成HTML标签的形式，来在页面上使用。例如 <popup-info>，或者是document.createElement("popup-info")这样。
 * 
 * Customized built-in elements 继承自基本的HTML元素。
 * 在创建时，你必须指定所需扩展的元素（正如上面例子所示），使用时需先写出基本的元素标签，并通过 is 属性指定custom element的名称。
 * 例如<p is="word-count">, 或者 document.createElement("p", { is: "word-count" })。
 */

class CustomElement extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        const shadow = this.attachShadow({mode: 'open'});
        const text = document.createElement("span");
        text.textContent = 'Hi Custom Element!';
        text.style = 'color: red';
        shadow.append(text);
    }
}

customElements.define('custom-element', CustomElement)


class BuiltInElement extends HTMLDivElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        const shadow = this.attachShadow({mode: 'open'});
        const text = document.createElement("span");
        text.textContent = 'Hi BuiltIn Element!';
        text.style = 'color: red';
        shadow.append(text);
    }
}

customElements.define('built-in-element', BuiltInElement, { extends: 'div' })