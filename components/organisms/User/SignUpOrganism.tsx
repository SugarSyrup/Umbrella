import { LoginHeader } from "../../atoms/LoginHeader.styles";
import { StyledLoginOrganism } from "./UserOragnism.styles";
import { SignUpForm } from "../../molecules/User/SignupForm";

export function SignUpOrganism() {
    return(
        <StyledLoginOrganism style={{height:'700px'}}>
            <LoginHeader>회원가입</LoginHeader>
            <SignUpForm />
        </StyledLoginOrganism>
    )
}
