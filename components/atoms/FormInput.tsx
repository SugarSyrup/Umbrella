import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

export interface FormInputPropsType extends UseFormRegisterReturn {
    placeholder?: string,
    type?:string
}

export function FormInput (formInfos:FormInputPropsType) {
    return(
        <StyledInput {...formInfos} />
    )
}

const StyledInput = styled.input`
    width:100%;
    height:50px;
    
    padding-left:10px;
    border:0px;
    border-radius:5px; 

    background-color:#F3F3F3;
`