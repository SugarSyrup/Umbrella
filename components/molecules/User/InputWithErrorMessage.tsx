import { AuthFormInput } from "../../atoms/AuthFormInput.styles";
import { SmallErrorMessage } from "../../atoms/SmallErrorMessage.styles";
import { UseFormRegisterReturn } from "react-hook-form";
import { EmptySpace, InputWithErroMessageDiv } from "./UserForm.styles";
import React from "react";

interface InputPropsType extends UseFormRegisterReturn {
    placeholder?: string,
    type: string,
    pattern? : string,
}

export interface InputWithErrorMessagePropsType {
    inputProps : InputPropsType,
    errorMessage? : string,
    value?: string | number,
    customref? : React.RefObject<HTMLInputElement>
}

export const InputWithErrorMessage = ({inputProps, errorMessage, customref, value} : InputWithErrorMessagePropsType) => {
    return(
        <InputWithErroMessageDiv>
            <label style={{fontSize:'12px', fontWeight:'bold'}}>{inputProps.name}</label>
            <AuthFormInput {...inputProps} ref={customref? customref : inputProps.ref} value={value&& value}/>
            { errorMessage ? <SmallErrorMessage>{errorMessage}</SmallErrorMessage> : <EmptySpace /> }
        </InputWithErroMessageDiv>
    )
}