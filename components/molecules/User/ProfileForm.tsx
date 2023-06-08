import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {AxiosError, AxiosResponse} from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { StyledForm } from './UserForm.styles';
import { InputWithErrorMessage } from './InputWithErrorMessage';
import useAxios from '../../businesses/useAxios';
import { RectangleButton } from '@/components/atoms/RectangleButton.styles';
import { selectUserState, setIsLogin } from '@/store/userSlice';
import { useSelector } from 'react-redux';

const schema = Yup.object({
    nick_name: Yup.string().max(8,'닉네임은 최대 8글자 입니다').min(2,'닉네임은 최소 2글자 입니다.').required('닉네임을 입력해주세요'),
    name: Yup.string().required('이름을 입력해 주세요'),
    age: Yup.number().required('나이를 입력해 주세요'),
});
type FormData = Yup.InferType<typeof schema>;

type userProfileInfo = {
    nick_name : string,
    name: string,
    age: number
}

export function ProfileForm() {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const dispatch = useDispatch();
    const {user_id} = useSelector(selectUserState);
    const [userInfo, setUserInfo] = useState<userProfileInfo | null>(null);

    const { response: responseGet, error: errorGet, loading: loadingGet } = useAxios({
        method: `GET`,
        url: `user/${user_id}/info`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const { response, error, loading, sendData } = useAxios({
        method: `PUT`,
        url: `user`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = ({name, nick_name, birth}) => {
        const userdata = {
            nick_name: nick_name,
            name: name,
            birth: birth,
        };
        sendData(userdata);
        dispatch(setIsLogin({isLoggedin : true, nickname : nick_name}));
    }
    
    const onLoginSuccess = (response : AxiosResponse) => {
        router.push({
            pathname: 'workspace'
        })
    }

    const onError = (error: Error|AxiosError) => {
        //console.log(error);
    }

    useEffect(() => {
        setUserInfo(responseGet?.data());
    }, [])

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
            <InputWithErrorMessage inputProps={{placeholder:'Name', type:'text', ...register('name')}} errorMessage={errors.name?.message} value={userInfo?.name} />            
            <InputWithErrorMessage inputProps={{placeholder:'NickName', type:'text', ...register('nick_name')}} errorMessage={errors.nick_name?.message} value={userInfo?.nick_name}/>
            <InputWithErrorMessage inputProps={{placeholder:'age', type:'number', ...register('age')}} errorMessage={errors.age?.message} value={userInfo?.age}/>

            <RectangleButton type="submit">회원 정보 변경</RectangleButton>
        </StyledForm>
    )
};
