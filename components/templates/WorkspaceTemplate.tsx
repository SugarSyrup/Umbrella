import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { SideNavigator } from '../molecules/Workspace/SideNavigator';
import { AddContent } from '../molecules/Workspace/AddContent';
import { LogOutButton } from '../molecules/Workspace/LogOutButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const mainTheme = {
    primaryColor: "202123",
    secondaryColor : "F3F3F3",
    textColor: "FFFFFF",
}

interface IWorkSpaceTemplateProps {
    children: React.ReactNode;
}

export default function WorkSpaceTemplate({children}: IWorkSpaceTemplateProps) {
    return(
    <ThemeProvider theme={mainTheme}>
        <WorkspaceLayout>
            <WorkspaceSidebar>
                <SidebarHeading>@Your Company</SidebarHeading>
                <SideNavigator />
                <AddContent />
                <LogOutButton />
            </WorkspaceSidebar>
            <WorkspaceHeader>
                <div className="welcome">
                    <span>WelcomeBack, SugarSyrup</span>
                    <span></span>
                </div>
                <HeaderRightDiv>
                    <FontAwesomeIcon icon={faBell} />
                    <div className="img"></div>
                    <span>SugarSyrup</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </HeaderRightDiv>
            </WorkspaceHeader>
            <WorkspaceMain>
                {children}
            </WorkspaceMain>
        </WorkspaceLayout>
    </ThemeProvider>
    )
}

const WorkspaceLayout = styled.div`
    width: 100%;
    height: 100vh;

    display:grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 5fr;
    grid-template-areas:
        "sidebar header header header header"
        "sidebar main main main main"
        "sidebar main main main main"
        "sidebar main main main main"
        "sidebar main main main main";
`

const WorkspaceSidebar = styled.aside`
    grid-area: sidebar;
    background-color:black;
    color:white;
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const WorkspaceHeader = styled.aside`
    box-sizing: border-box;
    grid-area: header;
    background-color:white;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    width:100%;
    padding-left:100px;
    padding-right:100px;

    .welcome{
        font-size:22px;
    }
`

const HeaderRightDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;

    width:200px;

    svg{
        font-size:28px;
    }    
    .img{  
        margin-left:30px;
        margin-right:30px;

        flex-shrink:0;

        width:100px;
        height:100px;
        border-radius:50%;
        background-color:grey;
    }

    span{
        font-size:20px;
        margin-right:10px;
    }
`

const WorkspaceMain = styled.aside`
    grid-area: main;   
    background-color: #F3F3F3;
    position:relative;
`

const SidebarHeading = styled.h1`
    font-size:36px;
    font-weight:bolder;
    word-spacing:-3px;
    margin-bottom:100px;
`