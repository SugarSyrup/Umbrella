import { useRouter } from 'next/router';
import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import { Chatting } from '@/components/organisms/Workspace/Chatting';
import WorkSpaceTemplate from "@/components/templates/WorkspaceTemplate";

export default function WorkSpace() {
    const router = useRouter();
    const {id} = router.query;
    return(
        <UserAuthTemplate>
            <WorkSpaceTemplate>
                <Chatting id={Number(id)} />
            </WorkSpaceTemplate>
        </UserAuthTemplate>
    )
}