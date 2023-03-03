export interface RectangleButtonPropsType {
    type: "button" | "submit" | "reset",
    content: string,
    color?: string,
}

export function RectangleButton({type, content, color}: RectangleButtonPropsType) {
    return(
        <button type={type} style={{color:color}}>{content}</button>
    )
}