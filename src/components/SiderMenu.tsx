import React, { useEffect, useState } from 'react'
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
    handle: (obj: any) => void
    [propName: string]: any
}
const SiderMenu: any = ({ location, menus = [], handle }: MenuProps) => {
    const [activeKey, setActiveKey] = React.useState('')
    const [openKey, setOpenKey] = useState('')
    React.useEffect(() => {
        const path = location.pathname
        setActiveKey(path)
        const target = fn(menus, path)
        console.log('target', target)
        setOpenKey(target)
    }, [])
    // useEffect(() => {
    //     if (!activeKey) return
    //     const target = fn(menus)
    //     setOpenKey(target)
    // }, [activeKey])
    const fn = (list: any, path: string) => {
        let result = ''
        const loop = (list: any) => {
            list.forEach((item: any) => {
                if (item.path === path) {
                    console.log('相等了', item.name)
                    result = item.name
                }
                if (item.subs) {
                    loop(item.subs)
                }
            })
        }
        loop(list)
        return result
    }
    const renderItem = (item: Item) => {
        return (
            <Menu.Item key={item.path} icon={item.icon ? item.icon : null}>
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
    const handleClick = (args: any) => {
        console.log('arg', args)
        setActiveKey(args.key)
        // handle(args)
    }
    const handleOpen = (param) => {
        console.log('param', param)
        const key = param.pop()
        console.log('open key', key)
        setOpenKey(key)
    }
    return (
        <Menu
            theme="dark"
            onClick={handleClick}
            selectedKeys={[activeKey]}
            // openKeys={[openKey]}
            defaultOpenKeys={['about', 'btn']}
            // onOpenChange={handleOpen}
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}>
            {renderAside()}
        </Menu>
    )
}
export default SiderMenu
