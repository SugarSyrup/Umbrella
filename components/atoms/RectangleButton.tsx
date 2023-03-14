import styled from "styled-components"

export interface RectangleButtonPropsType {
    type: "button" | "submit" | "reset",
    content: string,
    color?: string,
}

export function RectangleButton({type, content, color}: RectangleButtonPropsType) {
    return(
        <StyledButton type={type} style={{color:color}}>
            {content}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    width:100%;
    height:50px;

    margin-top:30px;
    margin-bottom:30px;

    padding-left:10px;

    border:0px;
    border-radius:80px;

    background-color:#9484FF;
        
    cursor:pointer;
    
    font-size:18px;
    font-weight:bolder;
`