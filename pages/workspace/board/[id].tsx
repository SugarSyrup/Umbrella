import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import  WorkSpaceTemplate  from "@/components/templates/WorkspaceTemplate";
import {BoardView} from "@/components/organisms/Workspace/BoardView";
import { useRouter } from 'next/router';

export default function BoardViewPage() {
    const router = useRouter();
    const {id} = router.query;

    return(
        <UserAuthTemplate>
            <WorkSpaceTemplate>
                <BoardView id={Number(id)}/>
            </WorkSpaceTemplate>
        </UserAuthTemplate>
    )
}