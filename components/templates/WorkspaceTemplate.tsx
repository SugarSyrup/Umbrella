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

const mainTheme = {
    primaryColor: "202123",
    secondaryColor : "F3F3F3",
    textColor: "FFFFFF",
}

interface IWorkSpaceTemplateProps {
    Children?: React.ReactNode
}

export default function WorkSpaceTemplate({Children} : IWorkSpaceTemplateProps) {
    const {id, title} = useSelector(selectWorkspaceState);
    const dispatch = useDispatch();
    const {response, error, loading, sendData} = useAxios({
        method: `POST`,
        url: `/workspace/enter`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    useEffect(() => {
        const data = {
            id:id,
            title:title
        }

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
    return(
    <ThemeProvider theme={mainTheme}>
        <WorkspaceLayout>
            <WorkspaceSidebar/>
            {/* <WorkspaceHeader>
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
            </WorkspaceHeader> */}
            <WorkspaceMain>
                {Children}
            </WorkspaceMain>
        </WorkspaceLayout>
    </ThemeProvider>
    )
}

const WorkspaceLayout = styled.div`
    width: 100%;
    height: 100vh;
/* 
    display:grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 5fr;
    grid-template-areas:
        "sidebar header header header header"
        "sidebar main main main main"
        "sidebar main main main main"
        "sidebar main main main main"
        "sidebar main main main main"; */

    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:flex-start;
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
    height:100%;
    width:100%;
    /* grid-area: main;    */
    background-color: #d6d6d6;
`
