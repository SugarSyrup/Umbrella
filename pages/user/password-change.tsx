import { UserAuthTemplate } from "@/components/templates/UserAuthTemplate";
import { PasswordChangeOrganism } from "@/components/organisms/PasswordChangeOrganism";
import { UserTemplate } from "@/components/templates/UserTemplate";

export default function Home() {
  return (
    <UserTemplate>
      {/* <UserAuthTemplate> */}
        <PasswordChangeOrganism />
      {/* </UserAuthTemplate> */}
    </UserTemplate>
  )
}