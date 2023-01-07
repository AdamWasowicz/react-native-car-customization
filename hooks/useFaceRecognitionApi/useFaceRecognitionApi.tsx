import React from 'react';
import { carSettingsModel, getSettingsResponse, loginWithPhotoPayload, loginWithPhotoResponse, loginWithTextPayload, loginWithTextResponse, postSettingsResponse, registerPayload, registerResponse } from './models';
import axios, { AxiosError } from 'axios';
import { useAppSelector } from '../../redux/hooks';
import { loginWithPhotoEndpoint, registerEndpoint, postSettingsEndpoint, getSettingsEndpoint } from './endpoints';


const useFaceRecognitionApi = () => {
    const baseURL = useAppSelector(state => state.app.apiAddress);
    const token = useAppSelector(state => state.auth.token);

    const frApiClient = axios.create({
        baseURL: baseURL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })

    const loginWithText = async (data: loginWithTextPayload): Promise<loginWithTextResponse> => {
        try {
            const response = await frApiClient.post<loginWithTextResponse>(loginWithPhotoEndpoint, data);
            return response.data;
        }
        catch (error: any) {
            console.log(JSON.stringify(error.response?.data?.message));
            return Promise.reject(error);
        }
    }

    const loginWithPhoto = async(data: loginWithPhotoPayload): Promise<loginWithPhotoResponse> => {
        try {
            const response = await frApiClient.post<loginWithPhotoResponse>(loginWithPhotoEndpoint, data)
            return response.data;
        }
        catch (error: any) {
            console.log(JSON.stringify(error.response?.data?.message));
            return Promise.reject(error);
        }
    }

    const regiser = async (data: registerPayload): Promise<registerResponse> => {
        try {
            const response = await frApiClient.post<registerResponse>(registerEndpoint, data)
            return response.data;
        }
        catch (error: any) {
            console.log(JSON.stringify(error.response?.data?.message));
            return Promise.reject(error);
        }
    }

    const postSettings = async (data: carSettingsModel): Promise<postSettingsResponse> => {
        try {
            const response = await frApiClient.post<postSettingsResponse>(postSettingsEndpoint, data);
            return response.data;
        }
        catch (error: any) {
            console.log(JSON.stringify(error.response?.data?.message));
            return Promise.reject(error);
        }
    }

    const getSettings = async (): Promise<getSettingsResponse> => {
        try {
            const response = await frApiClient.get<getSettingsResponse>(getSettingsEndpoint);
            console.log('getSettings()')
            console.log(response.data)
            return response.data;
        }
        catch (error: any) {
            console.log(JSON.stringify(error.response?.data?.message));
            return Promise.reject(error);
        }
    }

    return {
        loginWithText, loginWithPhoto, regiser,
        postSettings, getSettings
    }
}

export default useFaceRecognitionApi;