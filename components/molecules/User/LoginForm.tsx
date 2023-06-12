import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios, {AxiosError, AxiosResponse} from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

//redux
import { useDispatch } from 'react-redux';

import { StyledLink } from '../../atoms/TextLink.styles';
import { RectangleButton } from '../../atoms/RectangleButton.styles';

import { StyledForm } from './UserForm.styles';
import { InputWithErrorMessage } from './InputWithErrorMessage';
import useAxios from '../../businesses/useAxios';
import { setIsLogin } from '@/store/userSlice';

const schema = Yup.object({
    email: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
});
type FormData = Yup.InferType<typeof schema>;

export function LoginForm() {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const dispatch = useDispatch();

    const { response, error, loading, sendData } = useAxios({
        method: `POST`,
        url: `login`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = ({email, password}) => {
        const userdata = {
            email : email,
            password : password,
        };
        console.log(userdata);
        sendData(userdata);

        // if(response) {
        //     onLoginSuccess(response);
        // }

        // if (error) { 
        //     onError(error);
        // }
    }
    const onLoginSuccess = (response : AxiosResponse) => {
        //console.log(1)
        console.log(response.data);
        const access_token = response.headers.authorization;
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

        const {nick_name, user_id} = response.data;
        dispatch(setIsLogin({isLoggedin : true, nickname : nick_name, user_id : user_id}));
        
        router.push({
            pathname: 'workspace'
        })
    }
    const onError = (error: Error|AxiosError) => {
        //console.log(error);
    }

    // const onSilentRefresh = (data:{email:string, password:string}) => {
    //     axios.post(`${API_URL}/refresh`, data)
    //       .then(onLoginSuccess)
    //       .catch(onError);
    // }

    useEffect(() => {
        //console.log(response);
        if(response){
            onLoginSuccess(response);
        }
    }, [response])

    useEffect(() => {
        //console.log(error);
        if(error) {
            onError(error);
        }
    }, [error])

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputWithErrorMessage inputProps={{placeholder:'email', type:'email', ...register('email')}} errorMessage={errors.email?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'password', type:'password', ...register('password')}} errorMessage={errors.password?.message}/>
            <StyledLink fontSize="8px" position="absolute" right="0" top={errors?.password ? "190px" : "170px"} href="/user/forget-password">Forgot Password?</StyledLink>
            <RectangleButton type="submit">LogIn</RectangleButton>
        </StyledForm>
    )
};
