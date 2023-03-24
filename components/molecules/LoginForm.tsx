import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios, {AxiosError, AxiosResponse} from 'axios';

import { AuthFormInput } from '../atoms/AuthFormInput.styles';
import { SmallErrorMessage } from '../atoms/SmallErrorMessage.styles';
import { StyledLink } from '../atoms/TextLink.styles';

import styles from '@/styles/pages/login.module.scss';
import { RectangleButton } from '../atoms/RectangleButton.styles';
import styled from 'styled-components';

const schema = Yup.object({
    username: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
});
type FormData = Yup.InferType<typeof schema>;

export function LoginForm() {
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
        //TODO : 다음 페이지로 리 다이렉션
        //TODO : 로그인 정보 저장하기
    }
    
    const onError = (error: Error|AxiosError) => {
        console.log(error);
    }

    const onSubmit:SubmitHandler<FieldValues> = ({username, password}) => {
        axios.post(`http://${window.location.host}/api/auth/login`, {username, password})
          .then(onLoginSuccess)
          .catch(onError);
    }

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
            <AuthFormInput placeholder='email' type='email' {...register('username')} />
            { errors?.username ? <SmallErrorMessage>errors.username.message</SmallErrorMessage> : <></> }
            <AuthFormInput placeholder='password' type='password' {...register('password')} />
            { errors?.password ? <SmallErrorMessage>errors.password.message</SmallErrorMessage> : <></> }
            <StyledLink href="/user/forget-password">Forgot Password?</StyledLink>
            <RectangleButton type="submit">LogIn</RectangleButton>
        </StyledForm>
    )
};

const StyledForm = styled.form`
    width:100%;
    margin-top:40px;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;

    position:relative;
`
