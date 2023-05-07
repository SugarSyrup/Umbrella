import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import { WorkSpaceOrganism } from "@/components/organisms/WorkSpaceOrganism";
import { UserTemplate } from "@/components/templates/UserTemplate";

export default function Home() {
  return (
    <UserTemplate>
      <UserAuthTemplate>
        <WorkSpaceOrganism />
      </UserAuthTemplate>
    </UserTemplate>
  )
}