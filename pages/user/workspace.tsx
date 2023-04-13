import { UserTemplate } from "@/components/templates/UserTemplate";
import { WorkSpaceOrganism } from "@/components/organisms/WorkSpaceOrganism";

export default function Home() {
  return (
    <UserTemplate>
      <WorkSpaceOrganism />
    </UserTemplate>
  )
}