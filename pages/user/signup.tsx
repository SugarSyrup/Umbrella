import React, { useState } from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';

import {useForm} from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import defaultStyles from '@/styles/pages/login.module.scss';
import signUpPageStyles from '@/styles/pages/signup.module.scss';


const schema = Yup.object({
  username: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
  password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
  passwordCheck: Yup.string().label('confirm password').oneOf([Yup.ref('password'), null], 'Password는 반드시 똑같이 입력해야 합니다.'), //Yup 라이브러리에 대한 적당한 공부?
  age: Yup.number().required('나이를 입력해 주세요'),
  gender: Yup.string().required(),
});
type FormData = Yup.InferType<typeof schema>;


export default function Home() {
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onError = (error: Error|AxiosError) => {
    console.log(error);
  }

  const onSignUpSuccess = (response : AxiosResponse) => {
    //redirect url
  }

  const onSubmit:SubmitHandler<FieldValues> = ({username, password}) => {
    axios.post(`http://${window.location.host}/api/auth/singup`, {username, password})
      .then(onSignUpSuccess)
      .catch(onError);
  }

  return (
    <div className={defaultStyles.mainContainer}>
      <main className={defaultStyles.loginContainer}>
        <div className={defaultStyles.textContainer}>
            <span className={defaultStyles.heading}>Sign Up</span>
        </div>
        {/* todo : classnames 사용하거나? style을 효율적으로 적용하는법. 디자인패턴이려나..? 이런거 알아보기 */}
        <form onSubmit={handleSubmit(onSubmit)} className={defaultStyles.loginForm}>
          <input {...register('username')} placeholder='Email' />
          <p style={{color:'red'}}>{errors.username?.message}</p>
          <input {...register('password')} type="password" placeholder='Password' />
          <p style={{color:'red'}}>{errors.password?.message}</p>
          <input {...register('passwordCheck')} type="password" placeholder='Password를 다시 입력해 주세요' />
          <p style={{color:'red'}}>{errors.passwordCheck?.message}</p>
          <div className={signUpPageStyles.rowDisplay}>
            <input {...register('age')} type="number" placeholder='Age' />
            <p style={{color:'red'}}>{errors.password?.message}</p>          
            <select>
              <option {...register('gender')}>--Please choose an gender</option>
              <option value="woman">여성</option>
              <option value="man">남성</option>
            </select>
          </div>
          <input type="submit" value={'Sign Up'} className={defaultStyles.submit}/>
        </form>
      </main>
    </div>
  )
}