import React from "react";

export interface SpanPropsType{
    content:string,
    children:React.ReactChild,
}

export function Span({content,children}:SpanPropsType){
    return(
        <span>{content}{children}</span>
    )
}