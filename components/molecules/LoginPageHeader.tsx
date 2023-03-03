import { Heading } from "../atoms/Heading";
import { Span } from "../atoms/Span";
import { TextLink } from "../atoms/TextLink";

export function LoginPageHeader() {
    return(
        <header>
            <Heading content='로그인' />
            <Span content='Umbrella에 처음 이십니까?'>
                <TextLink href='/user/signup' content='Create an New Account'/>    
            </Span>
        </header>
    )
}