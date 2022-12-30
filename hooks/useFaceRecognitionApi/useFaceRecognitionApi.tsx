import React from 'react';
import { carSettingsModel, getSettingsResponse, loginWithPhotoPayload, loginWithPhotoResponse, loginWithTextPayload, loginWithTextResponse, postSettingsResponse, registerPayload, registerResponse } from './models';
import axios from 'axios';
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
            'Authorization': `Bearer ${token}`
        },
    })

    const loginWithText = async (data: loginWithTextPayload): Promise<loginWithTextResponse> => {
        try {
            const response = await frApiClient.post<loginWithTextResponse>(loginWithPhotoEndpoint);
            return response.data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }

    const loginWithPhoto = async(data: loginWithPhotoPayload): Promise<loginWithPhotoResponse> => {
        try {
            const response = await frApiClient.post<loginWithPhotoResponse>(loginWithPhotoEndpoint)
            return response.data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }

    const regiser = async (data: registerPayload): Promise<registerResponse> => {
        try {
            const response = await frApiClient.post<registerResponse>(registerEndpoint);
            return response.data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }

    const postSettings = async (data: carSettingsModel): Promise<postSettingsResponse> => {
        try {
            const response = await frApiClient.post<postSettingsResponse>(postSettingsEndpoint);
            return response.data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }

    const getSettings = async (): Promise<getSettingsResponse> => {
        try {
            const response = await frApiClient.get<getSettingsResponse>(getSettingsEndpoint);
            return response.data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }

    return {
        loginWithText, loginWithPhoto, regiser,
        postSettings, getSettings
    }
}

export default useFaceRecognitionApi;