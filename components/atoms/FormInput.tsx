import { UseFormRegisterReturn } from "react-hook-form";

export interface FormInputPropsType extends UseFormRegisterReturn {
    placeholder?: string,
    type?:string
}

export function FormInput (formInfos:FormInputPropsType) {
    return(
        <input {...formInfos} />
    )
}