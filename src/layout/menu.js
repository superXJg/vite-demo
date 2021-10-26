const menu = [
    // { path: '/', exact: true, component: BaseLayout, auth: [1] },
    {
        path: '/home',
        exact: true,
        name: 'home',
        auth: [1],
        subs: [
            {
                path: '/home/topics',
                name: 'topics'
            }
        ]
    },
    { path: '/about', exact: true, name: 'about', auth: [1] },
    { path: '/user', exact: true, name: 'user', auth: [1] },
    {
        name: '通用',
        path: '/public',
        auth: [1],
        subs: [
            { name: '按钮', path: '/public/button' },
            { name: '图标', path: '/public/icon' }
        ]
    },
    {
        name: '导航',
        path: '/nav',
        subs: [
            { name: '下拉菜单', path: '/nav/dropdown' },
            { name: '导航菜单', path: '/nav/menu' },
            { name: '步骤条', path: '/nav/steps' }
        ]
    },
    {
        name: '表单',
        path: '/form',
        subs: [
            { name: '基础表单', path: '/form/base-form' },
            { name: '步骤表单', path: '/form/step-form' }
        ]
    },
    {
        name: '展示',
        path: '/show',
        subs: [
            { name: '表格', path: '/show/table', icon: '' },
            { name: '折叠面板', path: '/show/collapse', icon: '' },
            { name: '树形控件', path: '/show/tree', icon: '' },
            { name: '标签页', path: '/show/tabs', icon: '' }
        ]
    },
    {
        name: '其它',
        path: '/others',
        auth: [1],
        subs: [
            { name: '进度条', path: '/others/progress', icon: '' },
            { name: '动画', path: '/others/animation', icon: '' },
            { name: '上传', path: '/others/upload', icon: '' },
            { name: '富文本', path: '/others/editor', icon: '' },
            { name: '404', path: '/404', icon: '' },
            { name: '500', path: '/500', icon: '' }
        ]
    },
    {
        name: '多级导航',
        path: '/one',
        subs: [
            {
                name: '二级',
                path: '/one/two',
                icon: '',
                subs: [{ name: '三级', path: '/one/two/three', icon: '' }]
            }
        ]
    },
    {
        name: '关于',
        path: '/about',
        auth: [1]
    }
]

export default menu
