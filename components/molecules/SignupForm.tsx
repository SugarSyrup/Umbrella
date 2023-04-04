import React from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';

import { useRouter } from 'next/router';
import {useForm} from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { RectangleButton } from '@/components/atoms/RectangleButton.styles';
import { InputWithErrorMessage } from '@/components/molecules/InputWithErrorMessage';
import { StyledForm, StyledRowDiv, StyledSelect, StyledSelectDiv } from './UserForm.styles';

const schema = Yup.object({
    email: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
    passwordCheck: Yup.string().label('confirm password').oneOf([Yup.ref('password')], 'Password는 반드시 똑같이 입력해야 합니다.'), //Yup 라이브러리에 대한 적당한 공부?
    nick_name: Yup.string().max(8).min(2).required('닉네임을 입력해주세요'),
    name: Yup.string().required('이름을 입력해 주세요'),
    age: Yup.number().required('나이를 입력해 주세요'),
    gender: Yup.string().required(),
});
type FormData = Yup.InferType<typeof schema>;

export function SignUpForm() {
    const API_URL = `http://localhost:3000/api`;
    const router = useRouter();

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    
    const onError = (error: Error|AxiosError) => {
        console.log(error);
    }
    
    const onSignUpSuccess = (response : AxiosResponse) => {
        router.push({
            pathname: 'login'
        })
    }

    const onSubmit:SubmitHandler<FieldValues> = ({email, password, nickname, name, age, gender}) => {
        axios.post(`${API_URL}/singup`, {email, password, nick_name:nickname, name ,age, gender})
          .then(onSignUpSuccess)
          .catch(onError);
    }

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)} style={{marginTop:'10px'}}>
            <InputWithErrorMessage inputProps={{placeholder:'email', type:'email', ...register('email')}} errorMessage={errors.email?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'password', type:'password', ...register('password')}} errorMessage={errors.password?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'Password를 다시 입력해 주세요', type:'password', ...register('passwordCheck')}} errorMessage={errors.passwordCheck?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'NickName', type:'text', ...register('nick_name')}} errorMessage={errors.nick_name?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'Name', type:'text', ...register('name')}} errorMessage={errors.name?.message}/>

            <StyledRowDiv>
                <InputWithErrorMessage inputProps={{placeholder:'Age', type:'number', ...register('age')}} errorMessage={errors.age?.message}/>
                <StyledSelectDiv style={{display:'flex', flexDirection:'column'}}>
                    <label style={{fontSize:'12px', fontWeight:'bold'}}>성별</label>
                    <StyledSelect {...register('gender')}>
                        <option value="woman">여성</option>
                        <option value="man">남성</option>
                    </StyledSelect>
                </StyledSelectDiv>
            </StyledRowDiv>
    
          <RectangleButton type="submit">Sign Up</RectangleButton>
        </StyledForm>
    )
};