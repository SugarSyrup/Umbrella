import { useEffect } from "react";
import { useRouter } from 'next/router';

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { StyledLoginOrganism } from "./UserOragnism.styles";
import { LoginHeader } from "../atoms/LoginHeader.styles";
import { WorkSpaceLinks } from "../molecules/WorkSpaceLinks";

export function WorkSpaceOrganism() {
    const router = useRouter();
    const  {name}  = useSelector((state:RootState) => state.user);

    useEffect(() => {
        if(name === 'anon') router.push({pathname:'login'});
    }, []);

    return(
        <StyledLoginOrganism style={{height:'400px'}}>
            <LoginHeader>{name}&apos;s WorkSpace</LoginHeader>
            <WorkSpaceLinks />
        </StyledLoginOrganism>
    )
}
