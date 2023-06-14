import { useState, useEffect } from 'react';
import axios, { AxiosError, RawAxiosRequestConfig, AxiosResponse, AxiosRequestConfig} from 'axios';

import { accessTokenAtom } from '@/atoms/accessToken';
import { useRecoilState } from 'recoil';

axios.defaults.baseURL = process.env.PRODUCTION === "develop" ? "http://ec2-3-39-93-217.ap-northeast-2.compute.amazonaws.com:8800/" : "http://ec2-3-39-93-217.ap-northeast-2.compute.amazonaws.com:8800/";
axios.defaults.withCredentials = true;

const useAxios = (axiosParams: RawAxiosRequestConfig) => {
    const [ response, setResponse ] = useState<AxiosResponse>();
    const [ error, setError ] = useState<AxiosError>();
    const [ loading, setLoading ] = useState(axiosParams.method === "GET" || axiosParams.method === "get");

    const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);

    const fetchData = async (params: RawAxiosRequestConfig) => {
        await axios.request(params)
            .then(response => {
                setResponse(response);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `${accessToken.accesstoken}`;
        // console.log(accessToken)
        if(axiosParams.method === "GET" || axiosParams.method === "get"){
            fetchData(axiosParams);
        }
    }, []);

    const sendData = (data: {}) => {
        axiosParams.data = data;
        fetchData(axiosParams);
    }

    return { response, error, loading, sendData };
}

export default useAxios;