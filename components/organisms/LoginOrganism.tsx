import LoginForm from "../molecules/LoginForm";
import { LoginOAuthLinkButtonDiv } from "../molecules/LoginOAuthButtons";
import { LoginPageHeader } from "../molecules/LoginContentHeader";

export function LoginOrganism() {
    return(
        <main>
            <LoginPageHeader />
            <LoginForm />
            <LoginOAuthLinkButtonDiv />
        </main>
    )
}