import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {AxiosError, AxiosResponse} from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { RectangleButton } from '../atoms/RectangleButton.styles';

import { StyledForm } from './UserForm.styles';
import { InputWithErrorMessage } from './InputWithErrorMessage';
import useAxios from '../businesses/useAxios';

const schema = Yup.object({
    old_password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
    new_password: Yup.string().min(8,"비밀번호는 최소 8자리 입니다.").max(20,"비밀번호는 최대 20자리 입니다.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),    
});
type FormData = Yup.InferType<typeof schema>;

export function PassWordChangeForm() {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const { response, error, loading, sendData } = useAxios({
        method: `POST`,
        url: `user/update/password`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = ({old_password, new_password}) => {
        const userdata = {
            old_password : old_password,
            new_password : new_password,
        };
        sendData(userdata);
    }
    const onLoginSuccess = (response : AxiosResponse) => {
        router.push({
            pathname: 'login'
        })
    }
    const onError = (error: Error|AxiosError) => {
        console.log(error);
    }

    useEffect(() => {
        if(response){
            onLoginSuccess(response);
        }
    }, [response])

    useEffect(() => {
        if(error) {
            onError(error);
        }
    }, [error])

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputWithErrorMessage inputProps={{placeholder:'이전 Password', type:'string', ...register('old_password')}} errorMessage={errors.old_password?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'새로운 Password', type:'password', ...register('new_password')}} errorMessage={errors.new_password?.message}/>
            <RectangleButton type="submit">비밀번호 변경</RectangleButton>
        </StyledForm>
    )
};
