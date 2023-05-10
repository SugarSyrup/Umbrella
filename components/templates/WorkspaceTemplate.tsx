import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const mainTheme = {
    primaryColor: "202123",
    secondaryColor : "F3F3F3",
    textColor: "FFFFFF",
}

export default function WorkSpaceTemplate() {
    return(
    <ThemeProvider theme={mainTheme}>
        <WorkspaceLayout>
            <WorkspaceSidebar />
            <WorkspaceHeader />
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
    background-color:yellow;
`

const WorkspaceHeader = styled.aside`
    grid-area: header;
    background-color:red;
`

const WorkspaceMain = styled.aside`
    grid-area: main;   
    background-color: blue;
`