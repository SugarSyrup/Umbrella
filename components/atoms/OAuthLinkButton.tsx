import { ReactNode } from "react"

export interface OAuthLinkButtonPropsType {
    children:JSX.Element
}

export function OAuthLinkButton({children}:OAuthLinkButtonPropsType) {
    return(
        <div>
            {children}
        </div>
    )
}