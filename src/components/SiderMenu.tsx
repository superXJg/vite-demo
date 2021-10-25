import React from 'react';
import {Menu} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
type List = Item[];
type Item = {
    name: string,
    [propName: string]: any
}
const SiderMenu = (menus: any = [], handle: any) => {
    const renderItem = (item: Item) => {
        return <Menu.Item key={item.name}>{item.name}</Menu.Item>
    }
    const renderSub = (list: List) => {
        return list.map(item => {
            if (item.routes && item.routes.length > 0) {
                return <SubMenu key={item.name} title={item.name}>
                    {
                        renderSub(item.routes)
                    }
                </SubMenu>
            } else {
                renderItem(item)
            }
        })
    }
    return (
        <Menu
        onClick={handle}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {
            renderSub([])
        }
      </Menu>
    )
}
export default SiderMenu