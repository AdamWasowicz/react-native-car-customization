import React, { useState } from 'react';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import { useAppDispatch } from '../../redux/hooks';
import useAppStorage from '../../hooks/useAppStorage';
import useHTTP from '../../hooks/useHTTP/useHTTP';
import { JWT } from '../../hooks/useAppStorage/constants';
import { Alert } from 'react-native';
import { AxiosError } from 'axios';
import useAppNavigation from '../../hooks/useAppNavigation';



const useLoginWithTextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const http = useHTTP();
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();
    const storage = useAppStorage();


    const handleReqestSend = async () => {
        setIsLoading(true);

        await http.SendLoginRequest(email, password)
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
        .catch((error: AxiosError) => {
            setErrorMsg(error.message);
            setIsLoading(false);
            Alert.alert("Błąd logowania", "Sprawdź czy poprawnie wpisałeś swoje dane i spróbuj ponownie");
        });
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