import { useRouter } from 'next/router';

import { StyledLoginOrganism } from "./UserOragnism.styles";
import { LoginHeader } from "../../atoms/LoginHeader.styles";
import { PassWordChangeForm } from "../../molecules/User/PassWordChangeForm";

export function PasswordChangeOrganism() {
    const router = useRouter();

    return(
        <StyledLoginOrganism style={{height:'400px'}}>
            <LoginHeader>PassWord 변경</LoginHeader>
            <PassWordChangeForm />
        </StyledLoginOrganism>
    )
}
