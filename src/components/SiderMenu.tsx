import React from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Link, withRouter } from 'react-router-dom'

const { SubMenu } = Menu
type List = Item[]
type Item = {
    name: string
    [propName: string]: any
}
type MenuProps = {
    menus: List
    handle: () => void
}
const SiderMenu: any = ({ menus = [], handle }: MenuProps) => {
    const renderItem = (item: Item) => {
        return (
            <Menu.Item key={item.name} icon={item.icon ? item.icon : null}>
                <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
        )
    }
    const renderSub = (list: List, item: Item) => {
        return (
            <SubMenu key={item.name} title={item.name} icon={item.icon ? item.icon : null}>
                {list &&
                    list.map((inner) => {
                        return inner.subs && inner.subs.length > 0
                            ? renderSub(inner.subs, inner)
                            : renderItem(inner)
                    })}
            </SubMenu>
        )
    }
    const renderAside = () => {
        const dom = menus.map((item) => {
            if (item.subs && item.subs.length > 0) {
                return renderSub(item.subs, item)
            } else {
                return renderItem(item)
            }
        })
        return dom
    }
    return (
        <Menu
            theme="dark"
            onClick={handle}
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}>
            {renderAside()}
        </Menu>
    )
}
export default SiderMenu
