import { workspaceAtom } from "@/atoms/workspace"
import CustomCalendar from "@/components/molecules/Workspace/CustomCalendar";
import { useRecoilState } from "recoil"

export default function WorkSpaceMain() {
    const [workspace, setWorkspace] = useRecoilState(workspaceAtom);

    return (
        <div style={{
            width:"100%",
            height:"100%",
        }}>
            <div></div>
            <div>
                <div>
                    {workspace.data?.userListInWorkspace}
                </div>
                <CustomCalendar />
            </div>
        </div>
    )
}