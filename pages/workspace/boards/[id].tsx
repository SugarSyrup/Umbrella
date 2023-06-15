import { useRouter } from 'next/router';
import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import { Boards } from '@/components/organisms/Workspace/Boards';
import WorkSpaceTemplate from "@/components/templates/WorkspaceTemplate";

export default function WorkSpace() {
    const router = useRouter();
    const {id} = router.query;
    localStorage.setItem('currentBoards', String(id));
    return(
        <UserAuthTemplate>
            <WorkSpaceTemplate>
                <Boards id={typeof id === 'string' ? id : ''} />
            </WorkSpaceTemplate>
        </UserAuthTemplate>
    )
}