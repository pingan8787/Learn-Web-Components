
# EXE-Components

使用 [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 技术开发 EXE 组件库，脱离前端框架。

> 最终效果：[https://blog.pingan8787.com/exe-components/demo.html](https://blog.pingan8787.com/exe-components/demo.html)  
> 仓库地址：[https://github.com/pingan8787/Learn-Web-Components](https://github.com/pingan8787/Learn-Web-Components)

## 本地开发
克隆项目以后，可以使用 [http-server](https://github.com/http-party/http-server) 方便调试：
```bash
# 全局安装 http-server
npm install http-server -g

# 禁用 http-server 缓存
http-server -c-1 -p 1400
```

添加 `-c-1` 是为了禁用缓存，详细可以看 [http-server 文档](https://github.com/http-party/http-server)。

测试环境有 3 个 demo 入口：
- `demo.html`：正式环境 demo 入口页，执行 `npm run build` 后部署时使用；
- `demo-dev.html`：测试环境 demo 入口页，执行 `npm run dev` 开发模式时使用；

## 使用

### 1. 引入组件库

引入组件库的入口文件：

```html
<script type="module" src="./exe-components.js"></script>
```

### 2. 使用组件

使用一个简单的 `exe-avatar` 头像组件：

```html
<exe-button
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="关注"
></exe-button>
```

可以自定义参数，详细参数下面介绍。

更多组件正在开发中。

## 单一组件

文档更新中。

### 1. exe-avatar

使用示例：

```html
<h2>单一组件：exe-button</h2>
<h3>默认样式</h3>
<exe-button></exe-button>

<hr>

<h3>支持参数</h3>
<exe-button
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="关注"
></exe-button>

<hr>

<h3>支持事件绑定</h3>
<exe-button
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="关注"
    on-avatar-click="avatarClick()"
    on-button-click="buttonClick()"
></exe-button>
```

### 2. exe-button

使用示例：

```html
<h2>单一组件：exe-avatar</h2>
<h3>默认样式</h3>
<exe-avatar></exe-avatar>

<hr>

<h3>支持参数</h3>
<exe-avatar
    e-avatar-src="./testAssets/images/avatar-1.png"
    e-avatar-width="52px"
    e-avatar-radius="22px"
></exe-avatar>

<hr>

<h3>支持事件绑定</h3>
<exe-avatar
    e-avatar-src="./testAssets/images/avatar-1.png"
    e-avatar-width="52px"
    e-avatar-radius="22px"
    on-avatar-click="avatarClick()"
></exe-avatar>
```

## 组合组件

文档更新中。

### 1. exe-user-avatar

使用示例：

```html
<h2>组合组件：exe-user-avatar</h2>
<h3>默认样式</h3>
<exe-user-avatar></exe-user-avatar>

<hr>

<h3>支持传参</h3>
<exe-user-avatar 
    e-user-name="王平安"
    e-sub-name="福建省厦门市思明区"
    e-avatar-src="./testAssets/images/avatar-1.png"
    e-avatar-width="36px"
    e-avatar-radius="8px"
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="关注"
>
</exe-user-avatar>

<hr>

<h3>支持插槽</h3>
<exe-user-avatar 
    e-user-name="王平安"
    e-sub-name="福建省厦门市思明区"
    e-avatar-src="./testAssets/images/avatar-1.png"
    e-avatar-width="36px"
    e-avatar-radius="8px"
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="关注"
>
    <span slot="name-slot">
        <span class="medal-item"><img src="./testAssets/images/medal-1.png"></span>
        <span class="medal-item"><img src="./testAssets/images/medal-2.png"></span>
        <span class="medal-item"><img src="./testAssets/images/medal-3.png"></span>
        <span class="medal-item"><img src="./testAssets/images/medal-4.png"></span>
    </span>
    <span slot="sub-name-slot">
        <span class="medal-item"><img src="./testAssets/images/medal-3.png"></span>
        <span class="medal-item"><img src="./testAssets/images/medal-4.png"></span>
    </span>
</exe-user-avatar>

<hr>

<h3>支持事件绑定</h3>
<exe-user-avatar 
    e-user-name="王平安"
    e-sub-name="福建省厦门市思明区"
    e-avatar-src="./testAssets/images/avatar-1.png"
    e-avatar-width="36px"
    e-avatar-radius="8px"
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="关注"
    on-avatar-click="avatarClick()"
    on-button-click="buttonClick()"
>
</exe-user-avatar>
```


## 参考内容
- [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
- [xy-ui](https://github.com/XboxYan/xy-ui/)

## 拓展阅读
1. [Lit - Simple. Fast. Web Components.](https://lit.dev/)
2. [WEBCOMPONENTS.ORG Discuss & share web components](https://www.webcomponents.org/)
3. [Web Components as Technology](https://dzone.com/articles/web-components-as-technology)
4. [Stenciljs - Build. Customize. Distribute. Adopt.](https://stenciljs.com/)