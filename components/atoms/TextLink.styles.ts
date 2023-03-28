import Link from "next/link";
import styled from 'styled-components';
import { CSSProperties } from "styled-components";

export const StyledLink = styled(Link)<CSSProperties>`
    text-decoration : none;

    color:black;
    font-size:10px;
    font-weight:bolder;
    font-size:${props => props.fontSize? props.fontSize : "12px" };

    color:${(props) => props.color};
    position:${props => props.position};
    top:${props => props.top};
    left:${props => props.left};
    right:${props => props.right};
    bottom:${props => props.bottom};

    &:hover{
        color : #9484FF;
    }
`