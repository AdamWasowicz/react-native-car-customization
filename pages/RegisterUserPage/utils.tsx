import React, { useState } from 'react';
import InformationView from './subPages/InformationView';
import EmailAndPasswordView from './subPages/EmailAndPasswordView';
import TakePhotosView from './subPages/TakePhotosView';
import { useAppDispatch } from '../../redux/hooks';
import { setIsLoading } from '../../redux/features/app-slice';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import useAppStorage from '../../hooks/useAppStorage';
import { JWT } from '../../hooks/useAppStorage/constants';
import { Alert } from 'react-native';
import useAppNavigation from '../../hooks/useAppNavigation';
import { registerPayload, registerResponse } from '../../hooks/useFaceRecognitionApi/models';
import useFaceRecognitionApi from '../../hooks/useFaceRecognitionApi';

const useRegisterUserPage = () => {
    const requiredAmountOfPhotos: number = 4;

    const dispatch = useAppDispatch();
    const storage = useAppStorage();
    const navigation = useAppNavigation();
    const frApiClient = useFaceRecognitionApi();

    const [formStep, setFormStep] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [photosBase64, setPhotosBase64] = useState<string[]>([]);

    
    const hanldeAddPhoto = (value: string) => {
        setPhotosBase64([...photosBase64, value]);
    }

    const handleEmailChange = (value: string) => {
        setEmail(value);
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    }
    
    const increaseFormStep = () => {
        setFormStep(formStep + 1);
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

    const handleRegiser = async () => {
        dispatch(setIsLoading(true));

        // Send request
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
        try {
            await storage.insertKey(JWT, apiCallResponse!.auth_token)
            dispatch(setToken(apiCallResponse!.auth_token));
            dispatch(setIsAuthorized(true));

        }
        catch (error) {
            console.log(error);

            Alert.alert("Błąd", "Nie udało się zapisać danych", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])
        }
        finally {
            dispatch(setIsLoading(false));
            return;
        } 
    }

    const getInformationView = (): JSX.Element => {
        return <InformationView onClick={increaseFormStep}/>;
    }

    const getEmailAndPasswordView = (): JSX.Element => {
        return <EmailAndPasswordView 
            onPress={increaseFormStep}
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
        />
    }

    const getTakePhotosView = (): JSX.Element => {
        return <TakePhotosView
            onContinue={handleRegiser}
            requiredAmount={requiredAmountOfPhotos}
            addImageToForm={hanldeAddPhoto}
        />
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