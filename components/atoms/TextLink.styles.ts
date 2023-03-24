import Link from "next/link";
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    text-decoration : none;

    color:black;
    font-size:10px;
    font-weight:bolder;

    &:hover{
        color : #9484FF;
    }
`