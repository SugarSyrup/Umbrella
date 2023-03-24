import { ReactNode, useCallback } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    //TODO : Main Global Theme Seperated
    background-color:#F3F3F3;
    font-family: Averta,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    width:100vw;
    height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;
`

export interface UserTemplatePropsType {
    children: ReactNode,
}

export function UserTemplate({children} : UserTemplatePropsType) {
    return(
        <StyledDiv>
            {/* CSS ERROR */}
            {children}
        </StyledDiv>
    )
}