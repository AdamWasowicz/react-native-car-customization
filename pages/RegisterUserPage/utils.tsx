import React, { useState } from 'react';
import InformationView from './subPages/InformationView';
import EmailAndPasswordView from './subPages/EmailAndPasswordView';
import TakePhotosView from './subPages/TakePhotosView';
import useHTTP from '../../hooks/useHTTP/useHTTP';
import { useAppDispatch } from '../../redux/hooks';
import { setIsLoading } from '../../redux/features/app-slice';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import useAppStorage from '../../hooks/useAppStorage';
import { JWT } from '../../hooks/useAppStorage/constants';
import { Alert } from 'react-native';
import useAppNavigation from '../../hooks/useAppNavigation';

const useRegisterUserPage = () => {
    const requiredAmountOfPhotos: number = 4;

    const [formStep, setFormStep] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [photosUri, setPhotosUri] = useState<string[]>([]);

    const http = useHTTP();
    const dispatch = useAppDispatch();
    const storage = useAppStorage();
    const navigation = useAppNavigation();
    

    
    const hanldeAddPhoto = (value: string) => {
        setPhotosUri([...photosUri, value]);
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

    const handleRegiser = () => {
        dispatch(setIsLoading(true));

        http.SendRegisterRequest({
            email: email,
            password: password
        })
        .then(async (response: any) => {
            const token: string = response.auth_token;
            console.log(token)

            dispatch(setToken(token));
            dispatch(setIsAuthorized(true));
            await storage.insertKey(JWT, token);

            dispatch(setIsLoading(false));
            Alert.alert("Rejestracja udana", "Pomyślnie zarejestrowano do aplikacji");
            moveToMainPage();
        })
        .catch((error) => {
            console.log('[ ERROR API Login ] ' + error);
            dispatch(setIsLoading(false));
            Alert.alert("Bład podczas rejestracji użytkownika",
            "Spróbuj ponownie później");
            Promise.reject();
        })
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