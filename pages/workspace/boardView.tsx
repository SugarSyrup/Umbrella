import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import  WorkSpaceTemplate  from "@/components/templates/WorkspaceTemplate";
import {BoardView} from "@/components/organisms/Workspace/BoardView";
import useAxios from "@/components/businesses/useAxios";

export default function BoardViewPage() {
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
                <BoardView />
            </WorkSpaceTemplate>
        // </UserAuthTemplate>
    )
}