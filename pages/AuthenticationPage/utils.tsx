import React from 'react';
import useAppNavigation from '../../hooks/useAppNavigation';


const useAuthenticationPage = () => {
    const navigation = useAppNavigation();
    
    const navigateToLoginWithPhotoPage= () => {
        navigation.stackNavigator.navigate("LoginWithPhotoPage", {})
    }

    const navigateToLoginWithTextPage = () => {
        navigation.stackNavigator.navigate("LoginWithTextPage", {})
    }

    const navigateToRegister = () => {
        navigation.stackNavigator.navigate("RegisterUserPage", {})
    }

    return {
        navigateToLoginWithPhotoPage, navigateToRegister,
        navigateToLoginWithTextPage
    }
};


export default useAuthenticationPage;