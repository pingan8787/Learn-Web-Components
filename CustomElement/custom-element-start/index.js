/**
 * 使用 CustomElementRegistry.define() 方法用来注册一个 custom element
 * 参数如下：
 * - 元素名称，符合 DOMString 规范，名称不能是单个单词，且必须用短横线隔开
 * - 元素行为，必须是一个类
 * - 继承元素，可选配置，一个包含 extends 属性的配置对象，指定创建的元素继承自哪个内置元素，可以继承任何内置元素。
 */

class CustomElementStart extends HTMLElement {
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

customElements.define('custom-element-start', CustomElementStart)