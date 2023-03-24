import { LoginForm } from "../molecules/LoginForm";
import { LoginOAuthLinkButtonDiv } from "../molecules/LoginOAuthButtons";

import { TextLink } from "../atoms/TextLink.styles";
import styled from "styled-components";

const StyledMain = styled.div`
    width:400px;
    height:500px;
    padding:40px;

    border: 0px solid grey;
    border-radius:10px;
    background-color:white;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
`

export function LoginOrganism() {
    return(
        <StyledMain>
            <span style={{fontSize:"36px", fontWeight:"bolder", marginBottom:"20px"}}>로그인</span>
            <span>
                Umbrella에 처음 이십니까? <TextLink href='/user/signup' content='Create an New Account'/>    
            </span>
            <LoginForm />
            <StyledHrr>or</StyledHrr>
            <LoginOAuthLinkButtonDiv />
        </StyledMain>
    )
}

const StyledHrr = styled.span`
    display:flex;
    align-items: center;

    width:100%;
    margin-top:20px;
    margin-bottom:20px;

    font-size: 12px;
    color: rgba(0, 0, 0, 0.70);
    &::before,
    &::after {
        content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 8px;
    }
    
`