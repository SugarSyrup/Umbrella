import { StyledLoginOrganism } from "./UserOragnism.styles"
import { LoginHeader } from "@/components/atoms/LoginHeader.styles"
import { CreateWorkspaceForm } from "@/components/molecules/User/CreateWorkspaceForm"

export const WorkSpaceCreateOrganism = () => {
    // const  {name}  = useSelector((state:RootState) => state.user);

    // useEffect(() => {
    //     if(name === 'anon') router.push({pathname:'login'});
    // }, []);
    
    return(
        <StyledLoginOrganism style={{height:'400px'}}>
            <LoginHeader>WorkSpace 생성</LoginHeader>
            <CreateWorkspaceForm />
        </StyledLoginOrganism>
    )
}