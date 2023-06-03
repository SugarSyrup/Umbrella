import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectUserState } from "@/store/userSlice";

import { StyledLoginOrganism } from "./UserOragnism.styles";
import { LoginHeader } from "../../atoms/LoginHeader.styles";
import { WorkSpaceLinks } from "../../molecules/User/WorkSpaceLinks";
import useAxios from "@/components/businesses/useAxios";
import { AxiosResponse } from "axios";

export function WorkSpaceOrganism() {
    const {nickname} = useSelector(selectUserState);

    return(
        <StyledLoginOrganism style={{height:'400px'}}>
            <LoginHeader>{nickname}&apos;s WorkSpace</LoginHeader>
            <WorkSpaceLinks />
        </StyledLoginOrganism>
    )
}
