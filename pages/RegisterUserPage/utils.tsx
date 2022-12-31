import React, { useState } from 'react';
import InformationView from './subPages/InformationView';
import EmailAndPasswordUnputView from './subPages/EmailAndPasswordInputView';
import TakePhotosView from './subPages/TakePhotosView';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsLoading } from '../../redux/features/app-slice';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import useAppStorage from '../../hooks/useAppStorage';
import { JWT } from '../../hooks/useAppStorage/constants';
import { Alert } from 'react-native';
import useAppNavigation from '../../hooks/useAppNavigation';
import { registerPayload, registerResponse } from '../../hooks/useFaceRecognitionApi/models';
import useFaceRecognitionApi from '../../hooks/useFaceRecognitionApi';

const useRegisterUserPage = () => {
    const dispatch = useAppDispatch();
    const storage = useAppStorage();
    const navigation = useAppNavigation();
    const frApiClient = useFaceRecognitionApi();

    const email = useAppSelector(state => state.registerForm.email);
    const password = useAppSelector(state => state.registerForm.password);
    const photosBase64 = useAppSelector(state => state.registerForm.photos);
    const [formStep, setFormStep] = useState<number>(0);
    
    
    const increaseFormStep = () => {
        setFormStep(formStep + 1);
    }

    const handleRegiser = async () => {
        dispatch(setIsLoading(true));

        // Send request
        console.log('[Register] - send request');
        const data: registerPayload = {
            email: email,
            password: password,
            image: photosBase64[0]
        }
        let apiCallResponse: registerResponse;

        try {
            apiCallResponse = await frApiClient.regiser(data);
        }
        catch (error) {
            Alert.alert("Błąd", "Nie udało się zarejestrować", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])

            dispatch(setIsLoading(false));
            return;
        }

    
        // Set JWT in storage
        console.log('[Register] - set jwt in storage');
        try {
            await storage.insertKey(JWT, apiCallResponse!.auth_token)
            dispatch(setToken(apiCallResponse!.auth_token));
            dispatch(setIsAuthorized(true));

            dispatch(setIsLoading(false));
            navigation.moveToMainPage();
            return;

        }
        catch (error) {
            console.log(error);

            Alert.alert("Błąd", "Nie udało się zapisać danych", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])

            dispatch(setIsLoading(false));
            return;
        }
    }

    const getInformationView = (): JSX.Element => {
        return <InformationView onPress={increaseFormStep}/>;
    }

    const getEmailAndPasswordView = (): JSX.Element => {
        return <EmailAndPasswordUnputView onPress={increaseFormStep}/>
    }

    const getTakePhotosView = (): JSX.Element => {
        return <TakePhotosView onContinue={handleRegiser}/>
    }

    const renderView = (): JSX.Element => {
        switch (formStep) {
            case 0:
                return getInformationView();
            case 1:
                return getEmailAndPasswordView();
            case 2:
                return getTakePhotosView();
            default:
                return getInformationView();
        }
    }

    return {
        renderView, 
    }
}

export default useRegisterUserPage;