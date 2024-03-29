import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import  WorkSpaceTemplate  from "@/components/templates/WorkspaceTemplate";
import {BoardEditor} from "@/components/organisms/Workspace/BoardEdit";
import useAxios from "@/components/businesses/useAxios";

export default function BoardEditPage() {
    const {response, error, loading} = useAxios({
        method: `GET`,
        url: `{POSTID}`,
        headers : {
            "Content-Type" : "application/json",
        }
    })
    return(
        // <UserAuthTemplate>
            <WorkSpaceTemplate>
                <BoardEditor />
            </WorkSpaceTemplate>
        // </UserAuthTemplate>
    )
}