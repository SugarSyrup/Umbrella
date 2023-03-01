import React, { useState } from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';

import {useForm} from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import styles from '@/styles/pages/login.module.scss';


const schema = Yup.object({
  username: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
  password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
});
type FormData = Yup.InferType<typeof schema>;

export default function Home() {
  const JWT_EXPIRY_TIME = 1 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  
  const onSilentRefresh = (data:{username:string, password:string}) => {
    axios.post(`http://${window.location.host}/api/auth/silent-refresh`, data)
      .then(onLoginSuccess)
      .catch(onError);
  }
  
  const onLoginSuccess = (response : AxiosResponse) => {
    const { accessToken } = response.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME);
  }

  const onError = (error: Error|AxiosError) => {
    console.log(error);
  }

  const onSubmit:SubmitHandler<FieldValues> = ({username, password}) => {
    axios.post(`http://${window.location.host}/api/auth/login`, {username, password})
      .then(onLoginSuccess)
      .catch(onError);
  }

  return (
    <div className={styles.mainContainer}>
      <main className={styles.loginContainer}>
        <div className={styles.textContainer}>
            <span className={styles.heading}>Log in</span>
            <span className={styles.smallTxt}>New to Umbrella? <a href="/user/join">Create an new account</a></span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
          <input {...register('username')} placeholder='Email' />
          <p style={{color:'red'}}>{errors.username?.message}</p>
          <input {...register('password')} type="password" placeholder='Password' />
          <p style={{color:'red'}}>{errors.password?.message}</p>
          <a href="/user/find-password">Forgot Password?</a>
          <input type="submit" value={'Log in'} className={styles.submit}/>
        </form>
        <span className={styles.hrr}>or</span>
        <div className={styles.icons}>
          <div className={styles.google}>
            <FcGoogle />
          </div>
          <div className={styles.kakao}>
            <RiKakaoTalkFill />
          </div>
          <div className={styles.github}>
            <FaGithub />
          </div>
        </div>
      </main>
    </div>
  )
}