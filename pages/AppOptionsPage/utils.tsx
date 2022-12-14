import React, { useState } from 'react';
import { 
    setDarkTheme, setLightTheme, 
    setAdvancedOptionsEnabled, setApiAddress
} from '../../redux/features/app-slice';
import { setIsAuthorized } from '../../redux/features/auth-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useAppStorage from '../../utils/useAppStorage/useAppStorage';
import { JWT } from '../../utils/useAppStorage/constants';
import { InfoTable } from '../../utils/useAppStorage/models';


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
    // Remove async after tests
    const handleMotiveToggle = async (value: boolean) => {
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

        // Test
        const jwt = await storage.getJWT();
        console.log(jwt);
    }

    // Advanced Options Toggle
    const handleAdvancedOptionsToggle = (value: boolean) => {
        dispatch(setAdvancedOptionsEnabled(value));
        setAdvancedOptionsToggle(value);
    }

    // LOG OUT
    const handleLogOut = () => {
        dispatch(setIsAuthorized(false));
    }

    // API
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