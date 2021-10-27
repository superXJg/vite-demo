import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import styles from './baseLayOut.module.less'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import routes from '@/routes'
import menu from './menu'
import SiderMenu from '@/components/SiderMenu'
import React from 'react'
import logo from '../logo.svg'
const BaseLayout = (props: any) => {
    const menuCallback = (args: any) => {
        console.log('args', args)
        const { key } = args
    }
    return (
        <Layout>
            <Header className="header">
                <div className={styles.logo}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <SiderMenu location={props.location} menus={menu} handle={menuCallback} />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            height: 'calc(100% - 50px)',
                            minHeight: 280
                        }}>
                        <Switch>
                            <Redirect from="/" exact to="/home/topics" />
                            {routes.map((item: any) => {
                                return (
                                    <Route
                                        key={item.path}
                                        path={item.path}
                                        exact={item.exact}
                                        render={(props) => {
                                            console.log('props')
                                            return props ? (
                                                <item.component routes={routes} {...props} />
                                            ) : (
                                                // 这里也可以跳转到 403 页面
                                                <Redirect to="/403" {...props} />
                                            )
                                        }}></Route>
                                )
                            })}
                            <Redirect to="/404"></Redirect>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default withRouter(BaseLayout)
