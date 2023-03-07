//import icon from 'react-icons'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import { OAuthLinkButton } from "../atoms/OAuthLinkButton";

export function LoginOAuthLinkButtonDiv() {
    return(
        <div>
          <OAuthLinkButton><FcGoogle /></OAuthLinkButton>
          <OAuthLinkButton><FaGithub /></OAuthLinkButton>
          <OAuthLinkButton><RiKakaoTalkFill /></OAuthLinkButton>
        </div>
    )
}