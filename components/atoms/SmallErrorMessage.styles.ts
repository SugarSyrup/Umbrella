import styled from "styled-components"

export interface InputErrorMessagePropsType {
    color?: string,
}

export const SmallErrorMessage = styled.p<InputErrorMessagePropsType>`
    height:17px;

    font-size:12px;
    font-weight:bolder;

    margin-left:5px;
    margin-bottom:20px;
    margin-top:5px;

    color:${(props) => props.color};
`