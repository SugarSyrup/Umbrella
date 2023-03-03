export interface CenterTextContourPropsType {
    content : string,
}

export function CenterTextContour({content} : CenterTextContourPropsType) {
    return(
        <span>{content}</span>
    )
}