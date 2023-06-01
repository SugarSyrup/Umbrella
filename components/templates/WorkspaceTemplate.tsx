import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { SideNavigator } from '../molecules/Workspace/SideNavigator';
import { AddContent } from '../molecules/Workspace/AddContent';

const mainTheme = {
    primaryColor: "202123",
    secondaryColor : "F3F3F3",
    textColor: "FFFFFF",
}

export default function WorkSpaceTemplate() {
    return(
    <ThemeProvider theme={mainTheme}>
        <WorkspaceLayout>
            <WorkspaceSidebar>
                <SidebarHeading>@Your Company</SidebarHeading>
                <SideNavigator />
                <AddContent />
            </WorkspaceSidebar>
            <WorkspaceHeader>
            
            </WorkspaceHeader>
            <WorkspaceMain />
        </WorkspaceLayout>
    </ThemeProvider>
    )
}

const WorkspaceLayout = styled.div`
    width: 100%;
    height: 100vh;

    display:grid;
    grid-template-rows: 1fr 3fr;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
        "sidebar header header header"
        "sidebar main main main"
        "sidebar main main main"
        "sidebar main main main";
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
    grid-area: header;
    background-color:red;
`

const WorkspaceMain = styled.aside`
    grid-area: main;   
    background-color: blue;
`

const SidebarHeading = styled.h1`
    font-size:36px;
    font-weight:bolder;
    word-spacing:-3px;
`