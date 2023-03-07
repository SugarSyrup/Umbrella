import { Heading } from "../atoms/Heading";
import { Span } from "../atoms/Span";
import { TextLink } from "../atoms/TextLink";

export function LoginPageHeader() {
    //props로 받아서 좀더 범용성 있는 컴포넌트로 만들어야 하는가?
    return(
        <header>
            <Heading content='로그인' />
            <Span content='Umbrella에 처음 이십니까?'>
                <TextLink href='/user/signup' content='Create an New Account'/>    
            </Span>
        </header>
    )
}