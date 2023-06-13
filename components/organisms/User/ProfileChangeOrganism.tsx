import { LoginHeader } from "../../atoms/LoginHeader.styles";
import { StyledLoginOrganism } from "./UserOragnism.styles";
import { ProfileForm } from "@/components/molecules/User/ProfileForm";

export function ProfileChangeOrganism() {
    return(
        <StyledLoginOrganism>
            <LoginHeader>개인정보 수정</LoginHeader>
            <ProfileForm />
        </StyledLoginOrganism>
    )
}
