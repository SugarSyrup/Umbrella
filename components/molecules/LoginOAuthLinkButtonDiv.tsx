import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import { OAuthLinkButton } from "../atoms/OAuthLinkButton";
import { CenterTextContour } from '../atoms/CenterTextContour';

export function LoginOAuthLinkButtonDiv() {
    return(
        <div>
          <OAuthLinkButton content={<FcGoogle />} />
          <OAuthLinkButton content={<FaGithub />} />
          <OAuthLinkButton content={<RiKakaoTalkFill />} />
        </div>
    )
}