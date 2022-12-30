import React, { useState } from 'react';
import { 
    setDarkTheme, setLightTheme, 
    setAdvancedOptionsEnabled, setApiAddress
} from '../../redux/features/app-slice';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useAppStorage from '../../hooks/useAppStorage';
import { JWT } from '../../hooks/useAppStorage/constants';
import { Alert } from 'react-native';


const useAppOptionsPage = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.app.colorTheme);
    const isAuthorized = useAppSelector(state => state.auth.isAuthorized);
    const advancedOptionsEnabled = useAppSelector(state => state.app.advancedOptionsEnabled);
    const apiAddress = useAppSelector(state => state.app.apiAddress);
    const storage = useAppStorage();

    const [motiveToggle, setMotiveToggle] = useState<boolean>(theme == 'light' ? false : true);
    const [advancedOptionsToggle, setAdvancedOptionsToggle] = useState<boolean>(advancedOptionsEnabled);
    const [apiAddressInput, setApiAddressInput] = useState<string>(apiAddress);

    
    // Motive Toggle
    const handleMotiveToggle = (value: boolean) => {
        switch(value) {
            case true:
                dispatch(setDarkTheme());
                setMotiveToggle(true);
                break;
            case false:
                dispatch(setLightTheme());
                setMotiveToggle(false);
                break;
        }
    }

    // Advanced Options Toggle
    const handleAdvancedOptionsToggle = (value: boolean) => {
        dispatch(setAdvancedOptionsEnabled(value));
        setAdvancedOptionsToggle(value);
    }

    // LOG OUT
    const handleLogOut = async () => {
        try {
            const response = await storage.deleteKey(JWT);
            dispatch(setIsAuthorized(false));
            dispatch(setToken(""));
            Alert.alert("Sukces", "wylogowano pomyślnie", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])
        }
        catch (error) {
            console.log(error);
            Alert.alert("Błąd", "nie udało się wylogować użytkownika", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])
        }
    }

    // Redux - App
    const handleApiAddressChange = () => {
        dispatch(setApiAddress(apiAddressInput));
    }

    const handleApiAddressReset = () => {
        setApiAddressInput(apiAddress);
    }


    return {
        motiveToggle, handleMotiveToggle,
        isAuthorized, handleLogOut,
        advancedOptionsToggle, handleAdvancedOptionsToggle,
        apiAddressInput, setApiAddressInput, handleApiAddressChange, handleApiAddressReset
    }
}

export default useAppOptionsPage;