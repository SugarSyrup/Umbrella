import { useEffect } from "react";
import { useRouter } from 'next/router';

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { StyledLoginOrganism } from "./UserOragnism.styles";
import { LoginHeader } from "../atoms/LoginHeader.styles";
import { PassWordChangeForm } from "../molecules/PassWordChangeForm";

export function PasswordChangeOrganism() {
    const router = useRouter();

    return(
        <StyledLoginOrganism style={{height:'400px'}}>
            <LoginHeader>PassWord 변경</LoginHeader>
            <PassWordChangeForm />
        </StyledLoginOrganism>
    )
}
