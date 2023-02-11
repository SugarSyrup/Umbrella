import React, { useState } from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';

import {useForm} from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

//import '@/styles/pages/login.module.scss';


const schema = Yup.object({
  username: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
  password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
});
type FormData = Yup.InferType<typeof schema>;

export default function Home() {
  const JWT_EXPIRY_TIME = 1 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

  const [toggleLogin, setToggleLogin] = useState<boolean>(true);
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: yupResolver(schema)
  });

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
            <span className="smallTxt">New to Umbrella? <a href="/user/join">Create an new account</a></span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('username')} placeholder='Email' />
          {errors.username && <p style={{color:'red'}}>{errors.username?.message}</p>}
          <input {...register('password')} type="password" placeholder='Password' />
          <p style={{color:'red'}}>{errors.password?.message}</p>
          <a href="/user/find-password">Forgot Password?</a>
          <input type="submit" value={'Log in'} className="submit"/>
        </form>
        <span className="hrr">or</span>
        <div className="icons">
          <div className="icon google">
            <FcGoogle />
          </div>
          <div className="icon kakao">
            <RiKakaoTalkFill />
          </div>
          <div className="icon github">
            <FaGithub />
          </div>
        </div>
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
          font-weight:600;
          margin-top:10px;
          margin-bottom:20px;
        }
        .smallTxt a{
          text-decoration : none;
          color: #9484FF;
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

        p{
          font-size:12px;
          font-weight:bolder;
          margin-top:-17px; 
          margin-bottom:20px;
          margin-left:-250px;
        }

        form{
          display:flex;
          flex-direction:column;
          justify-content:flex-start;
          align-items:center;

          width:100%;
          margin-top:40px;

          position:relative;
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

        .submit{
          margin-top:30px;
          margin-bottom:30px;
          cursor:pointer;
          border-radius:80px;
          background-color:#9484FF;

          font-size:18px;
          font-weight:bolder;
        }

        form a {
          text-decoration : none;
          color:black;
          font-size:10px;
          font-weight:bolder;
          position:absolute;
          right:20px;
          top:120px;
          cursor:pointer;
        }

        form a:hover{
          color : #9484FF;
        }

        .icons {
          width:100%;
          height:20%;

          display:flex;
          flex-direction:row;
          justify-content:space-around;
          align-items:center;
        }

        .icon {
          width:60px;
          height:60px;
          border-radius:10px;
          

          display:flex;
          justify-content:center;
          align-items:center;
          font-size:30px;
        }

        .google{
          border:0.3px solid #EDEDED;
        }
        .kakao {
          background-color:#FAE200;
        }
        .github {
          background-color:black;
          color:white;
        }
      `}</style>
    </div>
  )
}