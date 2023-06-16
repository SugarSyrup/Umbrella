//import icon from 'react-icons'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import { OAuthLinkButton } from "../../atoms/OAuthButton.styles";
import { StyledDiv } from './LoginOAuthButtons.styles';

import axios from 'axios';

export function LoginOAuthLinkButtonDiv() {
    return(
        <StyledDiv>
          <OAuthLinkButton border="0.3px solid #EDEDED" ><FcGoogle /></OAuthLinkButton>
          <OAuthLinkButton backgroundColor="black" color="white"><FaGithub /></OAuthLinkButton>
          <OAuthLinkButton backgroundColor="#FAE200" color="black" onClick={async () => {
            const res = await axios.get('https://umbrellaapp.net/oauth2/authorization/kakao',{
              headers:{
                'Content-Type': 'application/json'
              },
              withCredentials:true,
            });
            
            console.log(res.data);
          }}><RiKakaoTalkFill /></OAuthLinkButton>
        </StyledDiv>
    )
}