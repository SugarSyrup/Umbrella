import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import { WorkSpaceCreateOrganism } from "@/components/organisms/User/WorkSpaceCreateOrganism";
import { UserTemplate } from "@/components/templates/UserTemplate";

export default function Home() {
  return (
    <UserTemplate>
      <UserAuthTemplate>
        <WorkSpaceCreateOrganism />
      </UserAuthTemplate>
    </UserTemplate>
  )
}