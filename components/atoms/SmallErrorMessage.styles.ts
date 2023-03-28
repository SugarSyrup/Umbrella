import styled from "styled-components";
import { CSSProperties } from "styled-components";

export const SmallErrorMessage = styled.p<CSSProperties>`
    height:17px;

    font-size:11px;
    font-weight:bolder;

    margin-left:5px;
    margin-bottom:20px;
    margin-top:5px;

    color:${(props) => props.color ? props.color : "red"};
`