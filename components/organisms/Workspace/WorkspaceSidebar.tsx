import styled from 'styled-components';

import { SideNavigator } from '../../molecules/Workspace/SideNavigator';
import { AddContent } from '../../molecules/Workspace/AddContent';
import { LogOutButton } from '../../molecules/Workspace/LogOutButton';

export function WorkspaceSidebar() {
    return(<Sidebar.Container>
        <Sidebar.Heading onClick={() => {
            window.location.href = "/";
            window.location.reload();
            return;
        }}>@Your Company</Sidebar.Heading>
        <SideNavigator />
        <AddContent />
        <LogOutButton />
    </Sidebar.Container>)
}


const Sidebar = {
    Container : styled.aside`
        grid-area: sidebar;
        background-color:#232428;
        color:white;
        
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        width:300px;
        height:100%;

        padding-left:20px;
        padding-right:20px;

    `,

    Heading : styled.h1`
        font-size:30px;
        font-weight:bolder;
        word-spacing:-3px;
        margin-bottom:100px;

        cursor:pointer;
    `
}