import { StyledLoginOrganism } from "./UserOragnism.styles";
import { LoginHeader } from "../../atoms/LoginHeader.styles";
import { PassWordFindForm } from "@/components/molecules/User/PassWordFindForm";

export function ForgetPasswordOrganism() {
    return(
        <StyledLoginOrganism style={{height:'400px'}}>
            <LoginHeader>PassWord 찾기</LoginHeader>
            <PassWordFindForm />
        </StyledLoginOrganism>
    )
}
