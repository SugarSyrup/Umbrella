import React, {useEffect, useState} from 'react';
import {AxiosError, AxiosResponse} from 'axios';

import useAxios from '../../businesses/useAxios';

import { useRouter } from 'next/router';
import {useForm} from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { RectangleButton } from '@/components/atoms/RectangleButton.styles';
import { InputWithErrorMessage } from '@/components/molecules/User/InputWithErrorMessage';
import { StyledForm, StyledRowDiv, StyledSelect, StyledSelectDiv } from './UserForm.styles';

import { EmailCheckForm } from './EmailCheckForm';

const schema = Yup.object({
    email: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
    code: Yup.string(),
    password: Yup.string().min(8,"비밀번호는 최소 8자리 입니다.").max(20,"비밀번호는 최대 20자리 입니다.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
    passwordCheck: Yup.string().min(8,"비밀번호는 최소 8자리 입니다.").max(20,"비밀번호는 최대 20자리 입니다.").label('confirm password').oneOf([Yup.ref('password')], 'Password는 반드시 똑같이 입력해야 합니다.'), //Yup 라이브러리에 대한 적당한 공부?
    nick_name: Yup.string().max(8,'닉네임은 최대 8글자 입니다').min(2,'닉네임은 최소 2글자 입니다.').required('닉네임을 입력해주세요'),
    name: Yup.string().required('이름을 입력해 주세요'),
    birth: Yup.date().required('생년월일을 입력해 주세요'),
    gender: Yup.string().required('성별을 입력해 주세요'),
});
type FormData = Yup.InferType<typeof schema>;

export function SignUpForm() {
    const router = useRouter();
    const [isEmailChecked, setIsEmailChecked] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const { response, error, loading, sendData } = useAxios({
        method: `POST`,
        url: `signUp`,
        headers : {
            "Content-Type" : "application/json",
        },
    })

    const onError = (error: Error|AxiosError) => {
    }
    
    const onSignUpSuccess = (response : AxiosResponse) => {
        console.log(response);
        router.push({
            pathname: 'login'
        })
    }

    const onSubmit:SubmitHandler<FieldValues> = ({email, password, nick_name, name, birth, gender}) => {
        let _birth = `${birth.getFullYear()}${birth.getMonth().toString().length < 2 ? '0' + birth.getMonth().toString() : birth.getMonth()}${birth.getDate().toString().length < 2 ? '0' + birth.getDate().toString() : birth.getDate()}`;

        const userdata = {
            email : email,
            password : password,
            nick_name : nick_name,
            name : name,
            birth_date : _birth,
            gender: gender
        };
        console.log(userdata);

        if(isEmailChecked) {
            console.log("123")
            sendData(userdata);
        }
        else {
            window.alert("이메일 인증을 우선 해주세요")
        }
    }

    useEffect(() => {
        if(response) {
            console.log('success')
            onSignUpSuccess(response)
        }
        else if(error) {
            console.log('error')
            onError(error)
        }
    }, [response, error])

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <EmailCheckForm setIsChecked={setIsEmailChecked}>
                <InputWithErrorMessage inputProps={{placeholder:'email', type:'email', ...register('email')}} errorMessage={errors.email?.message}/>
            </EmailCheckForm>
            <InputWithErrorMessage inputProps={{placeholder:'password', type:'password', ...register('password')}} errorMessage={errors.password?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'Password를 다시 입력해 주세요', type:'password', ...register('passwordCheck')}} errorMessage={errors.passwordCheck?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'NickName', type:'text', ...register('nick_name')}} errorMessage={errors.nick_name?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'Name', type:'text', ...register('name')}} errorMessage={errors.name?.message}/>

            <StyledRowDiv>
                <InputWithErrorMessage inputProps={{placeholder:'birth', type:'date', ...register('birth')}} errorMessage={errors.birth?.message}/>
                <StyledSelectDiv style={{display:'flex', flexDirection:'column'}}>
                    <label style={{fontSize:'12px', fontWeight:'bold'}}>성별</label>
                    <StyledSelect {...register('gender')}>
                        <option value="FEMALE">여성</option>
                        <option value="MALE">남성</option>
                    </StyledSelect>
                </StyledSelectDiv>
            </StyledRowDiv>
    
            <RectangleButton type="submit">회원가입</RectangleButton>
        </StyledForm>
    )
};