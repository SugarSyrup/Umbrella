import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {AxiosError, AxiosResponse} from 'axios';
import { useEffect } from 'react';

import { RectangleButton } from '../../atoms/RectangleButton.styles';

import { StyledForm } from './UserForm.styles';
import { InputWithErrorMessage } from './InputWithErrorMessage';
import useAxios from '../../businesses/useAxios';

const schema = Yup.object({
    title: Yup.string().email('email 형식을 입력해주세요').required('이메일(아이디)를 입력해 주세요'),
    desc: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,'8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요').required('비밀번호를 입력해 주세요'),
});
type FormData = Yup.InferType<typeof schema>;

export function CreateWorkspaceForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const { response, error, loading, sendData } = useAxios({
        method: `POST`,
        url: `workspace/create`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = ({title, desc}) => {
        const data = {
            title: title,
            desc : desc,
        };

        sendData(data);
    }
    const onSubmitSuccess = (response : AxiosResponse) => {
     //API 명세서 바뀌면 작성 하기   
     //workspace id response 받아서 바로 route하면 될듯
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
            <InputWithErrorMessage inputProps={{placeholder:'workspace명을 입력하세요', type:'text', ...register('title')}} errorMessage={errors.title?.message}/>
            <InputWithErrorMessage inputProps={{placeholder:'workspace에 대해 설명해주세요', type:'text', ...register('desc')}} errorMessage={errors.desc?.message}/>
            <RectangleButton type="submit">WorkSpace 생성</RectangleButton>
        </StyledForm>
    )
};
