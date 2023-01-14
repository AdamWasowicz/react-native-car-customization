import React, { useState } from 'react';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useAppStorage from '../../hooks/useAppStorage';
import { JWT } from '../../hooks/useAppStorage/constants';
import { Alert } from 'react-native';
import useAppNavigation from '../../hooks/useAppNavigation';
import { loginWithTextPayload, loginWithTextResponse } from '../../hooks/useFaceRecognitionApi/models';
import useFaceRecognitionApi from '../../hooks/useFaceRecognitionApi';
import { setIsLoading } from '../../redux/features/app-slice';
import { setAllSettigns } from '../../redux/features/carSettings-slice';



const useLoginWithTextPage = () => {
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();
    const storage = useAppStorage();
    const frApiClient = useFaceRecognitionApi();
    const isLoading = useAppSelector(state => state.app.isLoading);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");



    const handleReqestSend = async () => {
        dispatch(setIsLoading(true));

        // Send request
        const data: loginWithTextPayload = {
            email: email,
            password: password,
        }
        let apiCallResponse: loginWithTextResponse;

        try {
            apiCallResponse = await frApiClient.loginWithText(data);
        }
        catch (error) {
            console.log(error);

            Alert.alert("Błąd", "Nie udało się zalogować", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])

            dispatch(setIsLoading(false));
            return;
        }

        // Set JWT in storage
        try {
            await storage.insertKey(JWT, apiCallResponse!.auth_token)
            dispatch(setToken(apiCallResponse!.auth_token));
            dispatch(setIsAuthorized(true));
            moveToMainPage();
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

        // Get settings
        try {
            const settings = await frApiClient.getSettings();
            dispatch(setAllSettigns(settings.data));
        }
        catch(error) {
            console.log(error);
        }
        finally {
            dispatch(setIsLoading(false));
            return;
        }
        
    }

    const moveToMainPage = () => {
        //Move to MainPage
        navigation.stackNavigator.navigate(
            "MainPage",
            {}
        )

        //Disable going back
        navigation.stackNavigator.reset({
            index: 0,
            routes: [{name: 'MainPage'}],
        });
    }

    const handleEmailChange = (value: string) => {
        setEmail(value);
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    }


    return {
        email, password,
        handleReqestSend, handleEmailChange, handlePasswordChange,
        isLoading
    }
}

export default useLoginWithTextPage;