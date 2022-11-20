import React, { useEffect, useState } from 'react';
import { setDarkTheme, setLightTheme } from '../../redux/features/app-slice';
import { setIsAuthorized } from '../../redux/features/auth-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';


const useAppOptionsPage = () => {
    const theme = useAppSelector(state => state.app.colorTheme);
    const dispatch = useAppDispatch();
    const isAuthorized = useAppSelector(state => state.auth.isAuthorized);
    
    const [motiveToggle, setMotiveToggle] = useState<boolean>(theme == 'light' ? false : true)

    
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

    const handleLogOut = () => {
        dispatch(setIsAuthorized(false));
    }


    return {
        motiveToggle, handleMotiveToggle,
         isAuthorized, handleLogOut
    }
}

export default useAppOptionsPage;