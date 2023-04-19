import { LoginForm } from "../molecules/LoginForm";
import { LoginOAuthLinkButtonDiv } from "../molecules/LoginOAuthButtons";

import { LoginHeader } from "../atoms/LoginHeader.styles";
import { StyledLink } from "../atoms/TextLink.styles";
import { StyledLoginOrganism, StyledHrr } from "./UserOragnism.styles";

export function LoginOrganism() {
    return(
        <StyledLoginOrganism>
            <LoginHeader>로그인</LoginHeader>
            <span style={{fontSize:"16px"}}>
                Umbrella에 처음 이십니까? <StyledLink fontSize="12px" color="#372838" href='/user/signup'>Create an New Account</StyledLink>    
            </span>
            <LoginForm />
            <StyledHrr>or</StyledHrr>
            <LoginOAuthLinkButtonDiv />
        </StyledLoginOrganism>
    )
}
