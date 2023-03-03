import Link from "next/link";

export interface TextLinkPropsType {
    content: string,
    href: string,
}

export function TextLink({href, content} : TextLinkPropsType) {
    return(
        <Link href={href}>{content}</Link>
    )
}
