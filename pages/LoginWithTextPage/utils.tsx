import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StackNavigationParams } from '../../components/Navigation/types';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import { useAppDispatch } from '../../redux/hooks';
import useAxiosClient from '../../utils/Axios/useAxiosClient';
import { AxiosResponse, AxiosError } from 'axios';


const useLoginWithTextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const axios = useAxiosClient();
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();


    const handleReqestSend = async () => {
        console.log('requset start...')
        setIsLoading(true);

        axios.SendLoginRequest(email, password)
        .then((response: AxiosResponse<string>) => {
            const token =  response.data;

            console.log('requset end...')

            setErrorMsg("");
            setIsLoading(false);

            dispatch(setToken(token));
            dispatch(setIsAuthorized(true));

            moveToMainPage();
        })
        .catch((error: AxiosError) => {
            console.log('[ ERROR API Login ] ' + error.message);
            console.log('requset end...')
            setErrorMsg("Error with API");
            setIsLoading(false);
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