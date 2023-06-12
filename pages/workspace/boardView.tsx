import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import  WorkSpaceTemplate  from "@/components/templates/WorkspaceTemplate";
import {BoardView} from "@/components/organisms/Workspace/BoardView";

export default function BoardViewPage() {
    return(
        <UserAuthTemplate>
            <WorkSpaceTemplate>
                <BoardView />
            </WorkSpaceTemplate>
        </UserAuthTemplate>
    )
}