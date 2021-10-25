
import BaseLayout from '@/layout/BaseLayout';
import Home from '@/page/Home';
import About from '@/page/About';
import Users from '@/page/Users';
const routes = [
    // { path: '/', exact: true, component: BaseLayout, auth: [1] },
    { path: '/home', exact: true, component: Home, auth: [1] },
    { path: '/about', exact: true, component: About, auth: [1] },
    { path: '/user', exact: true, component: Users, auth: [1] },
]

export default routes