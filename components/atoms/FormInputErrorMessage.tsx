export interface FormInputErrorMessagePropsType {
    errorMessage? : string,
    color?: string
}

export function FormInputErrorMessage({errorMessage, color}:FormInputErrorMessagePropsType) {
    return(
        <p style={{color:color?color:"red"}}>{errorMessage}</p>
    )
}
