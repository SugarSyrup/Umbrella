import styled from "styled-components"
import { CSSProperties } from "styled-components";

export interface FormInputErrorMessagePropsType {
    errorMessage? : string,
    styles?: CSSProperties,

}

export function FormInputErrorMessage({errorMessage, styles}:FormInputErrorMessagePropsType) {
    return(
        <>
            <StyledP style={{...styles}}>{errorMessage}</StyledP>
        </>
    )
}

const StyledP = styled.p`
    height:17px;

    font-size:12px;
    font-weight:bolder;

    margin-left:5px;
    margin-bottom:20px;
    margin-top:5px;
`