import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { loginWithText, registerUser } from './endpoints';
import { registerUserPayload } from './types';


class HTTP_Client {
    private apiAddress: string;

    constructor(apiAddress: string) {
        this.apiAddress = apiAddress;
    }

    public SendLoginRequest = async (email: string, password: string): Promise<any> => {
        const url = this.apiAddress + loginWithText.url;

        return axios({
            method: loginWithText.method,
            url: url,
            data: {
                email: email,
                password: password,
            }
        })
        .then((response: AxiosResponse<string>) => {
            return response.data
        })
        .catch((error: AxiosError) => {
            Promise.reject(error);
        })
    }

    public SendRegisterRequest = async(payload: registerUserPayload): Promise<any> => {
        const url = this.apiAddress + registerUser.url;

        return axios({
            method: registerUser.method,
            url: url,
            data: payload
        })
        .then((response: AxiosResponse) => {
            return response.data;
        })
        .catch((error: AxiosError) => {
            Promise.reject(error);
        })
    }
}


const useHTTP = () => {
    const apiAddress = useAppSelector(state => state.app.apiAddress);

    return new HTTP_Client(apiAddress);
}

export default useHTTP;