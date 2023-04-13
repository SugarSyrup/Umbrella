import { AuthFormInput } from "../atoms/AuthFormInput.styles";
import { SmallErrorMessage } from "../atoms/SmallErrorMessage.styles";
import { UseFormRegisterReturn } from "react-hook-form";
import { EmptySpace, InputWithErroMessageDiv } from "./UserForm.styles";

interface InputPropsType extends UseFormRegisterReturn {
    placeholder?: string,
    type: string,
    pattern? : string,
}

interface InputWithErrorMessagePropsType {
    inputProps : InputPropsType,
    errorMessage? : string
}

export const InputWithErrorMessage = ({inputProps, errorMessage} : InputWithErrorMessagePropsType) => {
    return(
        <InputWithErroMessageDiv>
            <label style={{fontSize:'12px', fontWeight:'bold'}}>{inputProps.name}</label>
            <AuthFormInput {...inputProps}/>
            { errorMessage ? <SmallErrorMessage>{errorMessage}</SmallErrorMessage> : <EmptySpace /> }
        </InputWithErroMessageDiv>
    )
}