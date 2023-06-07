import React from 'react';

import { AddContent } from '../../molecules/Workspace/AddContent';
import { LogOutButton } from '../../molecules/Workspace/LogOutButton';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { selectWorkspaceState } from '@/store/workspaceSlice';

import { Layout, Menu, theme } from 'antd';
import { HomeOutlined, NotificationOutlined, CalendarOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



export function WorkspaceSidebar() {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const {data : {boards, events}} = useSelector(selectWorkspaceState);
    const router = useRouter();

    const items: MenuItem[] = [
        getItem('Home', '/', <HomeOutlined /> ),
      
        getItem('Boards', 'boards', <NotificationOutlined />, boards.map((event, index) => {
            return getItem(event.title, `/board/${event.board_id}`,);
        })),
      
        getItem('Events', 'event', <CalendarOutlined />, events.map((event, index) => {
            return getItem(event.title, `/event/${event.event_id}`,);
        })),
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        router.push({pathname:"/workspace"+e.key})
    };

    return(
        <Layout.Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '90%', borderRight: 0 }}
            items={items}
            onClick={onClick}
          />
          <span>TEST</span>
        </Layout.Sider>
    )
}