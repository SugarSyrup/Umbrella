import styled from "styled-components"

export interface OAuthLinkButtonPropsType {
    children:JSX.Element,
    backgroundColor?: string,
    color?: string,
    border? : string,
}

const StyledDiv = styled.div`
    width:60px;
    height:60px;
    border-radius:10px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:30px;   
`;

export function OAuthLinkButton({children, backgroundColor, color, border}:OAuthLinkButtonPropsType) {
    return(
        <StyledDiv style={{backgroundColor:backgroundColor, color:color, border:border}}>
            {children}
        </StyledDiv>
    )
}