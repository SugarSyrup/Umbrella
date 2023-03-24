import styled from "styled-components"

export interface OAuthLinkButtonPropsType {
    children:JSX.Element,
    backgroundColor?: string,
    color?: string,
    border? : string,
}

const StyledDiv = styled.div<OAuthLinkButtonPropsType>`
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

export function OAuthLinkButton({children, backgroundColor, color, border}:OAuthLinkButtonPropsType) {
    return(
        <StyledDiv {...{backgroundColor, color, border}}>
            {children}
        </StyledDiv>
    )
}