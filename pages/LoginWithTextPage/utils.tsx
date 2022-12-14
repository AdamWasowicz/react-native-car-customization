import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StackNavigationParams } from '../../components/Navigation/types';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import { useAppDispatch } from '../../redux/hooks';
import useAppStorage from '../../utils/useAppStorage/useAppStorage';
import useHTTP from '../../utils/useHTTP/useHTTP';
import { JWT } from '../../utils/useAppStorage/constants';
import { Alert } from 'react-native';



const useLoginWithTextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const axios = useHTTP();
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();
    const storage = useAppStorage();


    const handleReqestSend = async () => {
        setIsLoading(true);

        axios.SendLoginRequest(email, password)
        .then(async (response: any) => {
            const token: string =  response.auth_token;

            dispatch(setToken(token));
            dispatch(setIsAuthorized(true));
            await storage.insertKey(JWT, token);

            setErrorMsg("");
            moveToMainPage();
            setIsLoading(false);
            Alert.alert("Logowanie pomyślne", "Witamy ponownie");
        })
        .catch((error) => {
            console.log('[ ERROR API Login ] ' + error);
            setErrorMsg("Error with API");
            setIsLoading(false);
            Alert.alert("Błąd logowania", "Sprawdź czy poprawnie wpisałeś swoje dane i spróbuj ponownie");
        });
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