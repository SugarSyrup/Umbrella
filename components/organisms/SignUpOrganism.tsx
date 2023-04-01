import { LoginHeader } from "../atoms/LoginHeader.styles";
import { StyledLoginOrganism } from "./UserOragnism.styles";
import { SignUpForm } from "../molecules/SignupForm";

export function SignUpOrganism() {
    return(
        <StyledLoginOrganism>
            <LoginHeader>회원가입</LoginHeader>
            <SignUpForm />
        </StyledLoginOrganism>
    )
}
