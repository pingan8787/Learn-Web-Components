参考：https://github.com/XboxYan/xy-ui/

本地开发，安装 [http-server](https://github.com/http-party/http-server) 方便调试：
```bash
npm install http-server -g

http-server -c-1 -p 1400
```

添加 `-c-1` 是为了禁用缓存，详细可以看 [http-server 文档](https://github.com/http-party/http-server)。

# EXE-Components

使用 Web Components 技术开发 EXE 组件库，脱离前端框架。

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
    e-button-color="#5fce79"
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
    e-button-color="#5fce79"
    e-button-text="关注"
></exe-button>

<hr>

<h3>支持事件绑定</h3>
<exe-button
    e-button-radius="8px"
    e-button-color="#5fce79"
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
    e-button-color="#5fce79"
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
    e-button-color="#5fce79"
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
    e-button-color="#5fce79"
    e-button-text="关注"
    on-avatar-click="avatarClick()"
    on-button-click="buttonClick()"
>
</exe-user-avatar>
```