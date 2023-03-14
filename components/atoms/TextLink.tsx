import Link from "next/link";
import styled from 'styled-components';

export interface TextLinkPropsType {
    content: string,
    href: string,
}

export function TextLink({href, content} : TextLinkPropsType) {
    return(
        <StyledLink href={href}>{content}</StyledLink>
    )
}
//options : color: hover

const StyledLink = styled(Link)`
    text-decoration : none;

    color:black;
    font-size:10px;
    font-weight:bolder;

    &:hover{
        color : #9484FF;
    }
`