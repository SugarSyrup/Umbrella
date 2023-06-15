import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import WorkSpaceTemplate from "@/components/templates/WorkspaceTemplate";
import WorkSpaceMain from '@/components/organisms/Workspace/WorkspaceMain';

export default function WorkSpace() {
    return(
        <UserAuthTemplate>
            <WorkSpaceTemplate>
                <WorkSpaceMain />
            </WorkSpaceTemplate>
        </UserAuthTemplate>
    )
}