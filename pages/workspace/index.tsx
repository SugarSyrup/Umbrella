import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import WorkSpaceTemplate from "@/components/templates/WorkspaceTemplate";

export default function WorkSpace() {
    return(
        <UserAuthTemplate>
            <WorkSpaceTemplate />
        </UserAuthTemplate>
    )
}