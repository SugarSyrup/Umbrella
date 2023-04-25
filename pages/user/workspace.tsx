import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import { WorkSpaceOrganism } from "@/components/organisms/WorkSpaceOrganism";

export default function Home() {
  return (
    <UserAuthTemplate>
      <WorkSpaceOrganism />
    </UserAuthTemplate>
  )
}