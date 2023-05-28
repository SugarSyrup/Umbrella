import React, {useState, useRef} from 'react';
import {AxiosError, AxiosResponse} from 'axios';

import useAxios from '../../businesses/useAxios';

import { RectangleButton } from '@/components/atoms/RectangleButton.styles';
import { InputWithErrorMessage } from '@/components/molecules/User/InputWithErrorMessage';
import { InputWithErrorMessagePropsType } from '@/components/molecules/User/InputWithErrorMessage';

import styled from 'styled-components';
import { AuthFormInput } from '@/components/atoms/AuthFormInput.styles';
import { SmallErrorMessage } from '@/components/atoms/SmallErrorMessage.styles';
import { EmptySpace } from './UserForm.styles';


export function EmailCheckForm({inputProps, errorMessage} : InputWithErrorMessagePropsType) {
    const [emailAuth, setEmailAuth] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState<string|undefined>(undefined);
    const emailRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const { response, error, loading, sendData } = useAxios({
        method: `POST`,
        url: `send-email`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const onSendSuccess = (response : AxiosResponse) => {
        //response로 조건 확인하고 error 처리하기
        if(emailRef.current){
            emailRef.current.disabled = true;
        }
        setEmailAuth(false);

        // if(buttonRef.current) {
        //     buttonRef.current.innerText = "Email 재 입력 하기"
        // } 
    }

    const onError = (error: Error|AxiosError) => {
        //이거는 전송 에러일건데?
    }

    const onSubmit = () => {
        const data = {
            code: inputRef.current?.value
        }
        sendData(data);

        if(response) {
            onSendSuccess(response)
        }

        if(error) { 
            onError(error);
        }
    }

    const onEmailAuthClick = () => {
        if(emailRef.current?.value === "") {
            setEmailErrorMsg('이메일을 입력해주세요');
            setEmailAuth(false);
        }
        else {
            setEmailErrorMsg(undefined);
            setEmailAuth(true);
        }
    }

    return(
        <StyledForm>
            <StyledDiv>
                <InputWithErrorMessage inputProps={inputProps} errorMessage={emailErrorMsg} customref={emailRef}/>
                <RectangleButton type="button" style={{padding:"0px", margin:"0px", fontSize:"12px", marginLeft:"20px", marginTop:"-15px", width:"50%"}} ref={buttonRef} onClick={(onEmailAuthClick)}>인증번호 요청</RectangleButton>
            </StyledDiv>
            {emailAuth && 
                <StyledDiv style={{
                        marginTop: "-20px",
                        marginLeft:"40px",
                        width:"80%"
                    }}>
                    <AuthFormInput type="text" placeholder='인증코드를 입력해주세요' name="code" ref={inputRef}/>
                    <RectangleButton type="button" style={{padding:"0px", margin:"0px", fontSize:"12px", marginLeft:"10px", marginTop:"0px", width:"40%"}} onClick={(onSubmit)}>인증하기</RectangleButton>
                </StyledDiv>              
            }
        </StyledForm>
    )
};



// {emailErrorMsg != "" 
// ? <SmallErrorMessage>{emailErrorMsg}</SmallErrorMessage> 
// : <EmptySpace />
// }

const StyledForm = styled.form`
    width:100%;
`

const StyledDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    
    width:100%;
`