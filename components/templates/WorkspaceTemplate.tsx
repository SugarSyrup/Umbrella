import { WorkspaceSidebar } from '../organisms/Workspace/WorkspaceSidebar';

import useAxios from '../businesses/useAxios';
import React, {useEffect} from 'react';

import { useRecoilState } from "recoil";
import { userAtom } from "@/atoms/user";
import { workspaceAtom } from "@/atoms/workspace";
import { breadcrumbsAtom } from "@/atoms/breadcrumbs";
import { chattingAtom } from '@/atoms/chatting';

import { LogoutOutlined,DownOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, theme, Dropdown, Space, MenuProps } from 'antd';
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
    
    const [{isLoggedin,nickname, user_id,email}, setUser] = useRecoilState(userAtom);
    const [workspace, setWorkspace] = useRecoilState(workspaceAtom);
    const [chatting, setChatting] = useRecoilState(chattingAtom);
    const [{breadcrumbs}, setBreadcrumbsState] = useRecoilState(breadcrumbsAtom);

    const router = useRouter();
    const {response, error, loading, sendData} = useAxios({
        method: `GET`,
        url: `/workspace/${workspace.id}`,
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
            setUser({isLoggedin : false, nickname : "", email: "", user_id:-1});
            
            router.push({
              pathname: '/'
            })
          }} style={{color: "red"}}>
            <LogoutOutlined style={{ marginRight: 8 }} rev={4}/> 
            Logout
          </Link>
        ),
        key: '2',
      },
    ];

    useEffect(() => {
      // console.log(workspace);
      // console.log('workspace');
      const data = {
          id:workspace.id,
          title:workspace.title
      }
      // console.log(data);
  
      sendData(data);
    },[])
  
    useEffect(() => {
        if(response) {
            const workspacedata = response.data;
            // console.log(workspacedata);
            setWorkspace({id:workspace.id,title:workspace.title,data:{...workspacedata}});
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
              <DownOutlined rev={14}/> 
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