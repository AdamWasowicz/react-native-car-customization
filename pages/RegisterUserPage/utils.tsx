import React, { useState } from 'react';
import InformationView from './subPages/InformationView';
import EmailAndPasswordView from './subPages/EmailAndPasswordView';
import TakePhotosView from './subPages/TakePhotosView';
import useHTTP from '../../utils/useHTTP/useHTTP';
import { useAppDispatch } from '../../redux/hooks';
import { setIsLoading } from '../../redux/features/app-slice';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import useAppStorage from '../../utils/useAppStorage/useAppStorage';
import { JWT } from '../../utils/useAppStorage/constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigationParams } from '../../components/Navigation/types';
import { Alert } from 'react-native';

const useRegisterUserPage = () => {
    const requiredAmountOfPhotos: number = 2;

    const [formStep, setFormStep] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [photosUri, setPhotosUri] = useState<string[]>([]);

    const http = useHTTP();
    const dispatch = useAppDispatch();
    const storage = useAppStorage();
    const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();
    

    
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
        navigation.navigate(
            "MainPage",
            {}
        )

        //Disable going back
        navigation.reset({
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
            setIsLoading(false);
            Alert.alert("Bład podczas rejestracji użytkownika",
            "Sam nie wiem co poszło nie tak");
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