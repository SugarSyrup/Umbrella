import {useState} from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {AxiosError, AxiosResponse} from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { RectangleButton } from '../../atoms/RectangleButton.styles';

import { StyledForm } from './UserForm.styles';
import { InputWithErrorMessage } from './InputWithErrorMessage';
import useAxios from '../../businesses/useAxios';
import { EmailCheckForm } from './EmailCheckForm';

const schema = Yup.object({
    password: Yup.string().min(8,"비밀번호는 최소 8자리 입니다.").max(20,"비밀번호는 최대 20자리 입니다.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
    passwordCheck: Yup.string().min(8,"비밀번호는 최소 8자리 입니다.").max(20,"비밀번호는 최대 20자리 입니다.").label('confirm password').oneOf([Yup.ref('password')], 'Password는 반드시 똑같이 입력해야 합니다.'),
    email: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
});
type FormData = Yup.InferType<typeof schema>;

export function PassWordFindForm() {
    const router = useRouter();
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const { response, error, loading, sendData } = useAxios({
        method: `PATCH`,
        url: `/forget/password`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = ({email, password, passwordCheck}) => {
        if(password !== passwordCheck) {
            window.alert("입력하신 두개의 비밀번호가 일치 해야 합니다.")
        }
        else{
            const userdata = {
                email:email,
                password:password,
            };
            console.log(userdata);
    
            if(isEmailChecked){
                sendData(userdata);
            }
            else{
                window.alert("이메일 인증이 필요합니다.")
            }
        }
    }
    const onSubmitSuccess = (response : AxiosResponse) => {
        router.push({
            pathname: 'login'
        })
    }
    const onError = (error: Error|AxiosError) => {
        console.log(error);
    }

    useEffect(() => {
        if(response){
            onSubmitSuccess(response);
        }
    }, [response])

    useEffect(() => {
        if(error) {
            onError(error);
        }
    }, [error])

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <EmailCheckForm setIsChecked={setIsEmailChecked}>
                <InputWithErrorMessage inputProps={{placeholder:'Email', type:'email', ...register('email')}} errorMessage={errors.email?.message} />
            </EmailCheckForm>
            <InputWithErrorMessage inputProps={{placeholder:'이전 Password', type:'string', ...register('password')}} errorMessage={errors.password?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'새로운 Password', type:'password', ...register('passwordCheck')}} errorMessage={errors.passwordCheck?.message}/>
            <RectangleButton type="submit">비밀번호 변경</RectangleButton>
        </StyledForm>
    )
};
