const demos = [
    {
        title: '1. 单一组件：exe-button',
        items: [
            {
                title: '默认样式',
                html: 
`<exe-button></exe-button>`
            },
            {
                title: '支持参数',
                html: 
`<exe-button
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="关注"
></exe-button>

<exe-button
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="禁用"
    disabled="disabled"
></exe-button>

<exe-button
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="loading"
    loading="loading"
></exe-button>

<exe-button
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="dashed"
></exe-button>`
            },
            {
                title: '支持事件绑定',
                html: 
`<exe-button
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="关注"
    on-avatar-click="avatarClick()"
    on-button-click="buttonClick()"
></exe-button>
<exe-button
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="禁用"
    disabled="disabled"
    on-avatar-click="avatarClick()"
    on-button-click="buttonClick()"
></exe-button>`
            }
        ]
    },
    {
        title: '2. 单一组件：exe-avatar',
        items: [
            {
                title: '默认样式',
                html: `<exe-avatar></exe-avatar>`
            },
            {
                title: '支持参数',
                html: 
`<exe-avatar
    e-avatar-src="./testAssets/images/avatar-1.png"
    e-avatar-width="52px"
    e-avatar-radius="22px"
></exe-avatar>`
            },
            {
                title: '支持事件绑定',
                html: 
`<exe-avatar
    e-avatar-src="./testAssets/images/avatar-1.png"
    e-avatar-width="52px"
    e-avatar-radius="22px"
    on-avatar-click="avatarClick()"
></exe-avatar>`
            }
        ]
    },
    {
        title: '3. 组合组件：exe-user-avatar',
        items: [
            {
                title: '默认样式',
                html: `<exe-user-avatar></exe-user-avatar>`
            },
            {
                title: '支持传参',
                html: 
`<exe-user-avatar 
    e-user-name="王平安"
    e-sub-name="福建省厦门市思明区"
    e-avatar-src="./testAssets/images/avatar-1.png"
    e-avatar-width="36px"
    e-avatar-radius="8px"
    e-button-radius="8px"
    e-button-type="primary"
    e-button-text="关注"
>
</exe-user-avatar>`
            },
            {
                title: '支持插槽',
                html: 
`<exe-user-avatar 
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
</exe-user-avatar>`
            },
            {
                title: '支持事件绑定',
                html: 
`<exe-user-avatar 
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
</exe-user-avatar>`
            }
        ]
    }
];

const renderItems = items => {
    let result = '';
    items.forEach(item => {
        const { title, html } = item;
        result += `
<div class="demo-item">
<div class="demo-title"><i class="demo-icon"></i><span>${title}</span></div>
<div class="demo-code-title">使用示例：</div>
${html}
<div class="demo-code">
<div class="demo-code-title">代码示例：</div>
<pre><code>${hljs.highlight(html, {language: 'html'}).value}</code></pre>
</div>
</div>
        `
    })
    return result;
}

const renderHtml = () => {
    let result = '';
    demos.forEach(item => {
        const { title, items } = item;
        result += `
<h2>${title}</h2>
<div class="demo-list">
${renderItems(items)}
</div>
        `
    })
    return result;
}

window.onload = function () {
    const root = document.querySelector('#root');
    const html = renderHtml();
    root.innerHTML = html;
    hljs.highlightAll();
};
