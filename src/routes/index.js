import BaseLayout from '@/layout/BaseLayout'
import Home from '@/page/Home'
import About from '@/page/About'
import Topics from '@/page/Topics'
import NotFound from '@/page/NotFound'

import Users from '@/page/Users'
const routes = [
    { path: '/home/topics', component: Topics, name: 'topic', auth: [1] },
    { path: '/about', exact: true, component: About, name: 'about', auth: [1] },
    { path: '/public/button', exact: true, component: About, name: 'about', auth: [1] },
    { path: '/public/icon', exact: true, component: About, name: 'about', auth: [1] },
    { path: '/public/button/big', exact: true, component: About, name: 'about', auth: [1] },
    { path: '/user', exact: true, component: Users, name: 'user', auth: [1] },
    { path: '/404', exact: true, component: NotFound, name: 'user', auth: [1] }
]

export default routes
