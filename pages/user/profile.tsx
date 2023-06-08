import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import { ProfileChangeOrganism } from "@/components/organisms/User/ProfileChangeOrganism";
import { UserTemplate } from "@/components/templates/UserTemplate";

export default function Home() {
  return (
    <UserTemplate>
      {/* <UserAuthTemplate> */}
        <ProfileChangeOrganism />
      {/* </UserAuthTemplate> */}
    </UserTemplate>
  )
}