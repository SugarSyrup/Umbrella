import { UserTemplate } from "@/components/templates/UserTemplate";
import { SignUpOrganism } from "@/components/organisms/SignUpOrganism";

export default function Home() {
  return (
    <UserTemplate>
      <SignUpOrganism />
    </UserTemplate>
  )
}