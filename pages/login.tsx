import React, { useState } from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';

import {useForm} from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';

//import '@/styles/pages/login.module.scss';

export default function Home() {
  const JWT_EXPIRY_TIME = 1 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

  const [toggleLogin, setToggleLogin] = useState<boolean>(true);
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onLogin = (username:string, password:string) => {
    //http로 입력해서 Error 발생 가능!
    axios.post(`http://${window.location.host}/api/auth/login`, {username, password})
      .then(onLoginSuccess)
      .catch(onError);
  }
  
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
  const onSignUp = async (username:string, password:string) => {
    axios.post(`http://${window.location.host}/api/auth/singup`, {username, password})
      .then(onSignUpSuccess)
      .catch(onError);
  }
  const onSignUpSuccess = (response : AxiosResponse) => {

  }

  const onSubmit:SubmitHandler<FieldValues> = ({username, password}) => {
    {toggleLogin ? onLogin(username, password) : onSignUp(username, password)}
  }

  return (
    <div className="mainContainer">
      <main>
        <div className="textContainer">
            <span className="heading">Log in</span>
            <span className="smallTxt">New to Umbrella? <a>Create an new account</a></span>
        </div>
        <div className="oAuths">

        </div>
        <span className="hrr">or</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* todo : 정규식으로 이메일 비밀번호 양식 제한하기 */}
          <input {...register('username', {required: true})} placeholder='Email' />
          {errors.username && <p style={{color:'red'}}>Username is required</p>}
          <input {...register('password', {required: true})} type="password" placeholder='Password' />
          {errors.password && <p style={{color:'red'}}>Password is required</p>}
          <input type="submit" value={'Log in'} />
        </form>
      </main>
      <style jsx>{`
        .mainContainer{
            width:100vw;
            height:100vh;
            background-color:#F3F3F3;
            display:flex;
            justify-content:center;
            align-items:center;
            font-family : Averta,system-ui;
        }
        main{
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            align-items:flex-start;

            width:410px;
            height:500px;
            padding:40px;

            border:0px solid grey;
            border-radius:10px;
            background-color:white;
        }
        .textContainer {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:flex-start;
        }
        .textContainer .heading{
          font-size:36px;
          font-weight:bolder;
          margin-bottom:15px;
        }
        .textContainer .smallTxt {
          font-size:15px;
          font-color:grey;
          margin-bottom:20px;
        }
        .smallTxt a{
          color: purple;
        }

        .hrr{
          display:flex;
          align-items: center;

          width:100%;
          margin-bottom:20px;

          font-size: 12px;
          color: rgba(0, 0, 0, 0.70);
        }
        .hrr::before,
        .hrr::after {
            content: "";
            flex-grow: 1;
            background: rgba(0, 0, 0, 0.35);
            height: 1px;
            font-size: 0px;
            line-height: 0px;
            margin: 0px 8px;
        }
        form{
          display:flex;
          flex-direction:column;
          justify-content:flex-start;
          align-items:center;

          width:100%;
        }

        input{
          width:90%;
          margin-bottom:20px;
          border:0px;
          background-color:#F3F3F3;
          height:40px;
          border-radius:5px;
          padding-left:10px;
        }
      `}</style>
    </div>
  )
}