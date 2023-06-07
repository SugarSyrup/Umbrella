import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import { WorkSpaceTemplate } from "@/components/templates/WorkspaceTemplate";
import {BoardEditor} from "@/components/organisms/Workspace/BoardEditor";

export default function WorkSpace() {
    return(
        // <UserAuthTemplate>
            <WorkSpaceTemplate>
                <BoardEditor />
            </WorkSpaceTemplate>
        // </UserAuthTemplate>
    )
}