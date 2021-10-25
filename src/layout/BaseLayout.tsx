import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import styles from './baseLayOut.module.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import routes from '@/routes';
import SiderMenu from '@/components/SiderMenu'
const BaseLayout = () => {
    return (
        <Layout>
    <Header className="header">
      <div className={styles.logo} />
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <SiderMenu menu={routes}/>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
                {routes.map(item => {
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            exact={item.exact}
                            render={props => {
                                console.log('props', props)
                                console.log('item', item)
                                return <item.component {...props} />
                            }
                                // true ? (
                                //     <item.component {...props} />
                                // ) : (
                                //     // 这里也可以跳转到 403 页面
                                //     // <Redirect to='/404' {...props} />
                                //     <div>无组件数据</div>
                                // )
                            }></Route>
                    )
                })}
                <Redirect to='/404' />
            </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}
export default withRouter(BaseLayout)
