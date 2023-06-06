import styled from 'styled-components';

import { SideNavigator } from '../../molecules/Workspace/SideNavigator';
import { AddContent } from '../../molecules/Workspace/AddContent';
import { LogOutButton } from '../../molecules/Workspace/LogOutButton';

export function WorkspaceSidebar() {
    return(<StyledWorkspaceSidebar>
        <SidebarHeading>@Your Company</SidebarHeading>
        <SideNavigator />
        <AddContent />
        <LogOutButton />
    </StyledWorkspaceSidebar>)
}


const StyledWorkspaceSidebar = styled.aside`
    grid-area: sidebar;
    background-color:black;
    color:white;
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`


const SidebarHeading = styled.h1`
    font-size:36px;
    font-weight:bolder;
    word-spacing:-3px;
    margin-bottom:100px;
`