import axios from "axios";
import { useState } from "react";
import { LoginHeader } from "../atoms/LoginHeader.styles";
import { StyledLoginOrganism } from "./UserOragnism.styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from 'next/router';

export function WorkSpaceOrganism() {
    const router = useRouter();
    const [workspace, setWorkspace] = useState<string[]>([]);
    const  {name}  = useSelector((state:RootState) => state.user);


    useEffect(() => {
        if(name === 'anon') router.push({pathname:'login'});
        else {
            axios.get("/api/workspace")
                .then((response) => {setWorkspace(response.data)});
            console.log(workspace);
        }
    }, [])
    //Login 되었는지는 템플릿으로 확인하기
    return(
        <StyledLoginOrganism style={{height:'400px'}}>
            <LoginHeader>{name}&apos;s WorkSpace</LoginHeader>
            {
                workspace.map((ele) => <span key={ele}>ele</span> )
            }
        </StyledLoginOrganism>
    )
}
