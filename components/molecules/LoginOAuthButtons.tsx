//import icon from 'react-icons'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import { OAuthLinkButton } from "../atoms/OAuthButton";
import styled from 'styled-components';

export function LoginOAuthLinkButtonDiv() {
    return(
        <StyledDiv>
          <OAuthLinkButton border="0.3px solid #EDEDED"><FcGoogle /></OAuthLinkButton>
          <OAuthLinkButton backgroundColor="#FAE200"><FaGithub /></OAuthLinkButton>
          <OAuthLinkButton backgroundColor="black" color="white"><RiKakaoTalkFill /></OAuthLinkButton>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  width:100%;
  height:20%;

  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`