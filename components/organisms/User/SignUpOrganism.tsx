import { LoginHeader } from "../../atoms/LoginHeader.styles";
import { StyledLoginOrganism } from "./UserOragnism.styles";
import { SignUpForm } from "../../molecules/User/SignupForm";
import { SignUpAgreeForm} from "../../molecules/User/SignupAgree";
import { useEffect, useState } from "react";

export function SignUpOrganism() {
    const [isChecked, setIsChecked] = useState(false);
    return(
        <StyledLoginOrganism style={{height:isChecked ? '700px' : '400px'}}>
            {
                isChecked
                    ? <>
                        <LoginHeader>회원가입</LoginHeader>
                        <SignUpForm />
                    </>
                    : <>
                        <LoginHeader>약관 동의</LoginHeader>
                        <SignUpAgreeForm onSubmit={setIsChecked}/>
                    </>
            }
            
        </StyledLoginOrganism>
    )
}
