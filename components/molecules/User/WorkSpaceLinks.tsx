import { useEffect, useState } from "react";
import useAxios from "../../businesses/useAxios";
import {useRouter} from "next/router";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { setWorkspaceId } from "@/store/workspaceSlice";

export function WorkSpaceLinks() {
    const [workspace, setWorkSpace] = useState<{id:string, title:string}[]>([]);
    const dispatch = useDispatch();
    const router = useRouter();
    const {response, error, loading } = useAxios({
        method: `GET`,
        url: `workspace`,
        headers : {
            "Content-Type" : "application/json",
        },
    })

    useEffect(() => {
        if(response) {
            console.log(response.data)
            setWorkSpace(response.data);
        }
        else if(error) {
            console.log("error");
            //console.log(error)
        }
    },[response,error])

    return(
        <>
            {
                workspace.length == 0 ? <h2>Loading...</h2> : workspace.map((ele) => {
                    const onClick = () => {
                        dispatch(setWorkspaceId({
                            id : ele.id,
                            title : ele.title
                        }));
                        router.push({
                            pathname: '/workspace'
                        })
                    }
                    if(typeof ele.id === 'string'){
                        return(
                            <StyledDiv key={ele.id}>
                                <StyledWorkSpaceLink >
                                    {ele.title}
                                </StyledWorkSpaceLink>
                                <StyledButton onClick={onClick}>
                                    <span>이동하기 &rarr;</span>
                                </StyledButton>
                            </StyledDiv>
                        )
                    }
                })
            }
        </>
    )
}

const StyledDiv = styled.div`
    width:90%;
    margin-top:30px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`

const StyledWorkSpaceLink = styled.span`
    text-decoration : none;

    color:black;
    font-size:24px;
    font-weight:bolder;
`

const StyledButton = styled.button`
    background: #000;
    color: #fff;
    line-height: 42px;
    width:100px;
    padding: 0;
    border: none;
    position:relative;
    span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }
    &:before,
    &:after {
        position: absolute;
        content: "";
        height: 0%;
        width: 2px;
        background: #000;
    }
    &:before {
        right: 0;
        top: 0;
        transition: all 500ms ease;
    }
    &:after {
        left: 0;
        bottom: 0;
        transition: all 500ms ease;
    }
    &:hover{
        color: #000;
        background: transparent;
    }
    &:hover:before {
        transition: all 500ms ease;
        height: 100%;
    }
    &:hover:after {
        transition: all 500ms ease;
        height: 100%;
    }
    span:before,
    span:after {
        position: absolute;
        content: "";
        background: #000;
    }
    span:before {
        left: 0;
        top: 0;
        width: 0%;
        height: 2px;
        transition: all 500ms ease;
    }
    span:after {
        right: 0;
        bottom: 0;
        width: 0%;
        height: 2px;
        transition: all 500ms ease;
    }
    span:hover:before {
        width: 100%;
    }
    span:hover:after {
        width: 100%;
    }
`;