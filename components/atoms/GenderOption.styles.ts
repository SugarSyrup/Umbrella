import styled from "styled-components";

import { InputHTMLAttributes } from "react";
import { ChangeHandler } from "react-hook-form/dist/types/form";
import { UseFormRegisterReturn } from "react-hook-form";


export interface AuthFormInputPropsType extends UseFormRegisterReturn, InputHTMLAttributes<HTMLInputElement>{
    name : string,
    onBlur: ChangeHandler,
    onChange: ChangeHandler,
}

export const AuthFormInput = styled.option`
    width:100%;
    height:50px;
    
    padding-left:10px;
    border:0px;
    border-radius:5px; 

    background-color:#F3F3F3;
`
