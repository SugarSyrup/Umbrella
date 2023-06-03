import { ForgetPasswordOrganism } from "@/components/organisms/User/ForgetPasswordOrganism";
import { UserTemplate } from "@/components/templates/UserTemplate";

export default function Home() {
  return (
    <UserTemplate>
        <ForgetPasswordOrganism />
    </UserTemplate>
  )
}