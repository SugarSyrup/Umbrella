import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios, {AxiosError, AxiosResponse} from 'axios';
import { useRouter } from 'next/router';

//redux
import { useDispatch } from 'react-redux';
import { changeCurUser } from '../../store/CurUserSlice';

import { AuthFormInput } from '../atoms/AuthFormInput.styles';
import { SmallErrorMessage } from '../atoms/SmallErrorMessage.styles';
import { StyledLink } from '../atoms/TextLink.styles';
import { RectangleButton } from '../atoms/RectangleButton.styles';

import { StyledForm, EmptySpace } from './LoginForm.styles';

const JWT_EXPIRY_TIME = 1 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
//const API_URL = process.env.NEXT_PUBLIC_API_MOCKING === ('enabled') ? 'https://backend.dev/login' : `http://${window.location.host}/api/auth/silent-refresh`;

const schema = Yup.object({
    email: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
});
type FormData = Yup.InferType<typeof schema>;

export function LoginForm() {
//    const API_URL = `http://${window.location.host}/api`;
    const API_URL = `http://localhost:3000/api`;

    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const dispatch = useDispatch();

    const onSubmit:SubmitHandler<FieldValues> = ({email, password}) => {
        axios.post(`${API_URL}/login`, {email, password})
          .then(onLoginSuccess)
          .catch(onError);
    }
    const onLoginSuccess = (response : AxiosResponse) => {
        const { access_token, nick_name } = response.data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    
        setTimeout(onSilentRefresh, JWT_EXPIRY_TIME);
       
        dispatch(changeCurUser(nick_name as string));
        
        router.push({
            pathname: 'workspace'
        })
    }
    const onError = (error: Error|AxiosError) => {
        console.log(error);
    }

    const onSilentRefresh = (data:{email:string, password:string}) => {
        axios.post(`${API_URL}/refresh`, data)
          .then(onLoginSuccess)
          .catch(onError);
    }

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <AuthFormInput placeholder='email' type='email' {...register('email')} />
            { errors?.email ? <SmallErrorMessage>{errors.email.message}</SmallErrorMessage> : <EmptySpace/> }
            <AuthFormInput placeholder='password' type='password' {...register('password')} />
            { errors?.password ? <SmallErrorMessage>{errors.password.message}</SmallErrorMessage> : <EmptySpace/> }
            <StyledLink fontSize="8px" position="absolute" right="0" top={errors?.password ? "170px" : "150px"} href="/user/forget-password">Forgot Password?</StyledLink>
            <RectangleButton type="submit">LogIn</RectangleButton>
        </StyledForm>
    )
};
