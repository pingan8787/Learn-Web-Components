// 测试用户列表数据
const users = [
    {name: '前端早早聊', desc: '帮 5000 个前端先跑 @ 前端早早聊', level: 6, avatar: 'qdzzl.jpg', home: 'https://juejin.cn/user/712139234347565'},
    {name: '来自拉夫德鲁的码农', desc: '谁都不救我，谁都救不了我，就像我救不了任何人一样', level: 2, avatar: 'lzlfdldmn.jpg', home: 'https://juejin.cn/user/994371074524862'},
    {name: '黑色的枫', desc: '永远怀着一颗学徒的心。。。', level: 3, avatar: 'hsdf.jpg', home: 'https://juejin.cn/user/2365804756348103'},
    {name: 'captain_p', desc: '目的地很美好，路上的风景也很好。今天增长见识了吗', level: 2, avatar: 'cap.jpg', home: 'https://juejin.cn/user/2532902235026439'},
    {name: 'CUGGZ', desc: '文章联系微信授权转载。微信：CUG-GZ，添加好友一起学习~', level: 5, avatar: 'cuggz.jpg', home: 'https://juejin.cn/user/3544481220801815'},
    {name: '政采云前端团队', desc: '政采云前端 ZooTeam 团队，不掺水的原创。 团队站点：https://zoo.team', level: 6, avatar: 'zcy.jpg', home: 'https://juejin.cn/user/3456520257288974'},
]

// 测试生成用户列表模版
const usersTemp = () => {
    let temp = '';
    users.forEach(item => {
        const {name, desc, level, avatar, home} = item;
        temp += 
`<exe-user-avatar 
    e-user-name="${name}"
    e-sub-name="${desc}"
    e-avatar-src="./testAssets/images/users/${avatar}"
    e-avatar-width="36px"
    e-button-type="primary"
    e-button-text="关注"
    on-avatar-click="toUserHome('${home}')"
    on-button-click="toUserFollow('${name}')"
>
${
    level >= 0 && 
    `<span slot="name-slot">
        <span class="medal-item">（Lv${level}）</span>
    </span>`
}
    
</exe-user-avatar>`
    })

    return temp;
}

// 生成参数列表模版
const pramsTemp = (params = []) => {
    let temp = '<ul class="params-desc">';
    params.length > 0 && params.forEach(item => {
        const { key, desc } = item;
        temp += `
            <li style="margin-bottom: 6px;">
                <span style="word-break: break-word; border-radius: 4px; background-color: #fff5f5; color: #ff502c; font-size: 14px; padding: 2px 8px;">${key}</span>：<span>${desc}</span>
            </li>
        `;
    })
    return temp + "</ul>";
}

const demos = [
    {
        title: '1. 单一组件：exe-button',
        params: [
            {key: 'e-button-radius', desc: '按钮圆角，例如：8px'},
            {key: 'e-button-type', desc: '按钮类型，例如：default, primary, text, dashed'},
            {key: 'e-button-text', desc: '按钮文本，默认：打开'},
            {key: 'on-button-click', desc: '按钮点击事件，默认无'},
            {key: 'loading', desc: '按钮是否是 loading，例如：loading'},
        ],
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
    e-button-type="text"
    e-button-text="文本"
></exe-button>

<exe-button
    e-button-radius="8px"
    e-button-type="dashed"
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
        params: [
            {key: 'e-avatar-src', desc: '头像图片地址，例如：./testAssets/images/avatar-1.png'},
            {key: 'e-avatar-width', desc: '头像宽度，默认和高度一致，例如：52px'},
            {key: 'e-button-radius', desc: '头像圆角，例如：22px，默认：50%'},
            {key: 'on-avatar-click', desc: '头像点击事件，默认无'},
        ],
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
        params: [
            {key: 'e-user-name', desc: '用户名，例如：王平安'},
            {key: 'e-sub-name', desc: '副标题，例如：福建省厦门市思明区'},
            {key: 'e-avatar-src', desc: '头像图片地址，例如：./testAssets/images/avatar-1.png'},
            {key: 'e-avatar-width', desc: '头像宽度，默认和高度一致，例如：52px'},
            {key: 'e-button-radius', desc: '头像圆角，例如：22px，默认：50%'},
            {key: 'on-avatar-click', desc: '头像点击事件，默认无'},
            {key: 'e-button-radius', desc: '按钮圆角，例如：8px'},
            {key: 'e-button-type', desc: '按钮类型，例如：default, primary, text, dashed'},
            {key: 'e-button-text', desc: '按钮文本，默认：打开'},
            {key: 'on-button-click', desc: '按钮点击事件，默认无'},
            {key: 'loading', desc: '按钮是否是 loading，例如：loading'},
        ],
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
    },
    {
        title: '4. 复杂业务示例',
        params: [],
        items: [
            {
                title: '用户列表',
                html: usersTemp()
            },
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
        <pre>
            <code>${hljs.highlight(html, {language: 'html'}).value}</code>
        </pre>
    </div>
</div>
        `
    })
    return result;
}

const renderHtml = () => {
    let result = '';
    demos.forEach(item => {
        const { title, items, params } = item;
        result += `
<h2>${title}</h2>
${pramsTemp(params)}
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
