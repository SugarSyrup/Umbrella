import { ReactNode } from "react"

export interface OAuthLinkButtonPropsType {
    content:ReactNode
}

export function OAuthLinkButton({content}:OAuthLinkButtonPropsType) {
    return(
        <div>
            {content}
        </div>
    )
}