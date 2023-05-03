import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

axios.defaults.baseURL = process.env.production === "develop" ? "http://localhost:3000/api" : "";

const useAxios = (axiosParams: AxiosRequestConfig) => {
    const [ response, setResponse ] = useState<AxiosResponse>();
    const [ error, setError ] = useState<AxiosError>();
    const [ loading, setLoading ] = useState(axiosParams.method === "GET" || axiosParams.method === "get");

    const fetchData = async (params: AxiosRequestConfig) => {
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
        if(axiosParams.method === "GET" || axiosParams.method === "get"){
            fetchData(axiosParams);
        }
    }, []);

    const sendData = () => {
        fetchData(axiosParams);
    }

    return { response, error, loading, sendData };
}

export default useAxios;