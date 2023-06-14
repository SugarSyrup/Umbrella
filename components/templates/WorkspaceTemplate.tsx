import { WorkspaceSidebar } from '../organisms/Workspace/WorkspaceSidebar';

import useAxios from '../businesses/useAxios';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectWorkspaceState, setWorkspaceInfo } from '@/store/workspaceSlice';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '@/store/userSlice';

import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, theme, Dropdown, Space, MenuProps } from 'antd';
import { selectUserState } from '@/store/userSlice';
import { selectBreadcrumbsState } from '@/store/breadCrumb';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header, Content } = Layout;

interface IWorkSpaceTemplateProps {
  children?: React.ReactNode
}

const WorkspaceTemplate = ({children} : IWorkSpaceTemplateProps) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    const {id, title} = useSelector(selectWorkspaceState);
    const {nickname} =useSelector(selectUserState);
    const breadcrumbs = useSelector(selectBreadcrumbsState);
    const dispatch = useDispatch();
    const router = useRouter();
    const {response, error, loading, sendData} = useAxios({
        method: `POST`,
        url: `/workspace/enter`,
        headers : {
            "Content-Type" : "application/json",
        }
    })
  
    const items: MenuProps['items'] = [
      {
        label: (
          <Link rel="noopener noreferrer" href="/user/profile">
            개인 정보 수정
          </Link>
        ),
        key: '0',
      },
      {
        type: 'divider',
      },
      {
        label: (
          <Link rel="noopener noreferrer" href="/" onClick={(e) => {
            e.preventDefault();
            dispatch(setIsLogin({isLoggedin : false, nickname : ""}));
            
            router.push({
              pathname: '/'
            })
          }} style={{color: "red"}}>
            {/* <LogoutOutlined style={{ marginRight: 8 }} /> */}
            Logout
          </Link>
        ),
        key: '2',
      },
    ];

    useEffect(() => {
      const data = {
          id:id,
          title:title
      }
      console.log(data);
  
      sendData(data);
    },[])
  
    useEffect(() => {
        if(response) {
            const workspacedata = response.data;
            dispatch(setWorkspaceInfo(workspacedata));
        }
        else if(error){
              
        }
    }, [response, error])

  return (
    <Layout style={{width:'100%', height:'100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'flex-end', justifyContent: "flex-end" }}>
        <div className="demo-logo" />
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              { nickname }
              {/* <DownOutlined /> */}
            </Space>
          </a>
        </Dropdown>
      </Header>
      <Layout>
        <WorkspaceSidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
            {/* Component 분리 */}
          <Breadcrumb style={{ margin: '16px 0' }}>
            {
              breadcrumbs.map((breadcrumb) => {
                return(
                  <Breadcrumb.Item key={breadcrumb}>{breadcrumb}</Breadcrumb.Item>
                )
              })
            }
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default WorkspaceTemplate;