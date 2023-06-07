import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { WorkspaceSidebar } from '../organisms/Workspace/WorkspaceSidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import useAxios from '../businesses/useAxios';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectWorkspaceState, setWorkspaceInfo } from '@/store/workspaceSlice';
import { useDispatch } from 'react-redux';

// const mainTheme = {
//     primaryColor: "202123",
//     secondaryColor : "F3F3F3",
//     textColor: "FFFFFF",
// }


// export function WorkSpaceTemplate({children} : IWorkSpaceTemplateProps) {
//     const {id, title} = useSelector(selectWorkspaceState);
//     const dispatch = useDispatch();
//     const {response, error, loading, sendData} = useAxios({
//         method: `POST`,
//         url: `/workspace/enter`,
//         headers : {
//             "Content-Type" : "application/json",
//         }
//     })

//     useEffect(() => {
//         const data = {
//             id:id,
//             title:title
//         }

//         sendData(data);
//     },[])

//     useEffect(() => {
//         if(response) {
//             const workspacedata = response.data;
//             dispatch(setWorkspaceInfo(workspacedata));
//         }
//         else if(error){
            
//         }
//     }, [response, error])
//     return(
//     <ThemeProvider theme={mainTheme}>
//         <WorkspaceLayout>
//             <WorkspaceSidebar/>
//             {/* <WorkspaceHeader>
//                 <div className="welcome">
//                     <span>WelcomeBack, SugarSyrup</span>
//                     <span></span>
//                 </div>
//                 <HeaderRightDiv>
//                     <FontAwesomeIcon icon={faBell} />
//                     <div className="img"></div>
//                     <span>SugarSyrup</span>
//                     <FontAwesomeIcon icon={faCaretDown} />
//                 </HeaderRightDiv>
//             </WorkspaceHeader> */}
//             <WorkspaceMain>
//                 {children}
//             </WorkspaceMain>
//         </WorkspaceLayout>
//     </ThemeProvider>
//     )
// }

// const WorkspaceLayout = styled.div`
//     width: 100%;
//     height: 100vh;
// /* 
//     display:grid;
//     grid-template-rows: 1fr 4fr;
//     grid-template-columns: 1fr 5fr;
//     grid-template-areas:
//         "sidebar header header header header"
//         "sidebar main main main main"
//         "sidebar main main main main"
//         "sidebar main main main main"
//         "sidebar main main main main"; */

//     display:flex;
//     flex-direction:row;
//     justify-content:flex-start;
//     align-items:flex-start;
// `

// const WorkspaceHeader = styled.aside`
//     box-sizing: border-box;
//     grid-area: header;
//     background-color:white;

//     display:flex;
//     flex-direction:row;
//     justify-content:space-between;
//     align-items:center;

//     width:100%;
//     padding-left:100px;
//     padding-right:100px;

//     .welcome{
//         font-size:22px;
//     }
// `

// const HeaderRightDiv = styled.div`
//     display:flex;
//     flex-direction:row;
//     justify-content:space-around;
//     align-items:center;

//     width:200px;

//     svg{
//         font-size:28px;
//     }    
//     .img{  
//         margin-left:30px;
//         margin-right:30px;

//         flex-shrink:0;

//         width:100px;
//         height:100px;
//         border-radius:50%;
//         background-color:grey;
//     }

//     span{
//         font-size:20px;
//         margin-right:10px;
//     }
// `

// const WorkspaceMain = styled.aside`
//     height:100%;
//     width:100%;
//     /* grid-area: main;    */
//     background-color: #d6d6d6;
// `


// import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';

const { Header, Content } = Layout;

interface IWorkSpaceTemplateProps {
  children?: React.ReactNode
}

const WorkspaceTemplate: React.FC = ({children} : IWorkSpaceTemplateProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{width:'100%', height:'100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
      </Header>
      <Layout>
        <WorkspaceSidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
            {/* Component 분리 */}
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
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