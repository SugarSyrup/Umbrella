import React, {useState, useRef, useEffect} from 'react';
import {AxiosError, AxiosResponse} from 'axios';

import useAxios from '../../businesses/useAxios';

import styled from 'styled-components';
import { AuthFormInput } from '@/components/atoms/AuthFormInput.styles';
import { SmallErrorMessage } from '@/components/atoms/SmallErrorMessage.styles';

interface EmailCheckFormPropsType{
    setIsChecked : React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode,
}

//아래 Props로 제공받는 errorMessage를 어떻게 활용, ref포함 ref도 받는데 지금 여기서 임의데로 안받고 있음, 받으면서 버그 없게 고쳐진것 같으니 사용해보셈
export function EmailCheckForm({children, setIsChecked} : EmailCheckFormPropsType) {
    const [emailAuth, setEmailAuth] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState<string|undefined>();
    const [codeErrorMsg, setCodeErrorMsg] = useState<string|undefined>();
    const [code, setCode] = useState<string>("");

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
        setCode(response.data.auth_key);
    }

    const onError = (error: Error|AxiosError) => {
        //이거는 전송 에러일건데? 아직 Return이 어떻게 돌아오는지 모르겠으
        console.log(error);
    }

    const onSubmit = () => {
            if(inputRef.current?.value === code) {
                if(emailRef.current){
                    emailRef.current.disabled = true;
                }
                setEmailAuth(false);
                setIsChecked(true);
            }
            else {
                setCodeErrorMsg("인증번호가 다릅니다. 다시 번호를 입력해주세요");
            }
    }

    const onEmailAuthClick = () => {
        const emailRef = document.querySelector('input');
        if(emailRef?.value === "") {
            setEmailErrorMsg('이메일을 입력해주세요');
            setEmailAuth(false);
        }
        else {
            setEmailErrorMsg(undefined);
            setEmailAuth(true);
            const data = {email:emailRef?.value};
            sendData(data);
        }
    }

    useEffect(() => {
        if(response) {
            console.log('success')
            console.log(response.data);
            onSendSuccess(response);

        }
        else if(error) {
            console.log('error');
            onError(error);
        }
    }, [response, error])

    return(
        // <StyledForm>
        <>
            <StyledDiv>
                {children}
                <RectangleButton style={{padding:"0px", margin:"0px", fontSize:"12px", marginLeft:"20px", marginTop:"-15px", width:"50%"}} ref={buttonRef} onClick={(onEmailAuthClick)}>인증번호 요청</RectangleButton>
            </StyledDiv>
            {emailAuth && 
                <StyledDiv style={{
                        marginTop: "-20px",
                        marginLeft:"40px",
                        width:"80%"
                    }}>
                    <AuthFormInput type="text" placeholder='인증코드를 입력해주세요' name="code" ref={inputRef}/>
                    <RectangleButton style={{padding:"0px", margin:"0px", fontSize:"12px", marginLeft:"10px", marginTop:"0px", width:"40%"}} onClick={(onSubmit)}>인증하기</RectangleButton>
                </StyledDiv>         
            }
            {
                codeErrorMsg && <SmallErrorMessage>{codeErrorMsg}</SmallErrorMessage>
            }     
        </>
        // </StyledForm>
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

export const RectangleButton = styled.span`
    width:100%;
    height:50px;

    margin-top:30px;
    margin-bottom:30px;

    padding-left:10px;

    border:0px;
    border-radius:80px;

    background-color:#372838;
    color:white;
        
    cursor:pointer;
    
    font-size:18px;
    font-weight:bolder;

    display:flex;
    justify-content:center;
    align-items:center;
`