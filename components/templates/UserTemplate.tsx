export interface UserTemplatePropsType {
    children: JSX.Element,
}

export function UserTemplate({children} : UserTemplatePropsType) {
    return(
        <div>
            {children}
        </div>
    )
}