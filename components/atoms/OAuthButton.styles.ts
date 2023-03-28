import styled from "styled-components";
import { CSSProperties } from "styled-components";

export const OAuthLinkButton = styled.div<CSSProperties>`
    width:60px;
    height:60px;
    border-radius:10px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:30px;   
    background-color:${(props) => props.backgroundColor};
    color:${(props) => props.color};
    border:${(props) => props.border};
`;