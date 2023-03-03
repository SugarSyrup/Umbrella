export interface HeadingPropsType{
    content:string,
}

export function Heading({content}:HeadingPropsType) {
    return(
        <h1>{content}</h1>
    )
}