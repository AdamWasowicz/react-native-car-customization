import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { loginWithText } from './endpoints';


class AxiosClient {
    private apiAddress: string;

    constructor(apiAddress: string) {
        this.apiAddress = 'http://' + apiAddress;
    }

    public SendLoginRequest = async (email: string, password: string): Promise<AxiosResponse> => {
        const url = this.apiAddress + loginWithText.url;

        return axios({
            method: loginWithText.method,
            url: url,
            data: {
                email: email,
                password: password,
            }
        }); 
    }
}


const useAxiosClient = () => {
    const apiAddress = useAppSelector(state => state.app.apiAddress);

    return new AxiosClient(apiAddress);
}

export default useAxiosClient;