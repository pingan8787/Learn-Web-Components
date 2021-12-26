# Learn-Web-Components

学习资料：[Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)



EXE Components 最终效果：[https://blog.pingan8787.com/exe-components/demo.html](https://blog.pingan8787.com/exe-components/demo.html)  

- [使用 custom elements](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements)
- [使用 shadow DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)
- [使用 templates and slots](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_templates_and_slots)
- [HTML 导入（HTML Imports） - 已过时](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/Web_Components)


CSS 伪类：
*   [`:defined`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:defined): 匹配任何已定义的元素，包括内置元素和使用`CustomElementRegistry.define()`定义的自定义元素。
*   [`:host`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host): 选择 [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) 的 shadow host ，内容是它内部使用的 CSS（ containing the CSS it is used inside ）。
*   [`:host()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host()): 选择 [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) 的 shadow host ，内容是它内部使用的 CSS （这样您可以从 shadow DOM 内部选择自定义元素）— 但只匹配给定方法的选择器的 shadow host 元素。
*   [`:host-context()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host-context()): 选择 [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) 的 shadow host ，内容是它内部使用的 CSS （这样您可以从 shadow DOM 内部选择自定义元素）— 但只匹配给定方法的选择器匹配元素的子 shadow host 元素。

## 拓展阅读
1. [Lit - Simple. Fast. Web Components.](https://lit.dev/)
2. [WEBCOMPONENTS.ORG Discuss & share web components](https://www.webcomponents.org/)
3. [Web Components as Technology](https://dzone.com/articles/web-components-as-technology)
4. [Stenciljs - Build. Customize. Distribute. Adopt.](https://stenciljs.com/)