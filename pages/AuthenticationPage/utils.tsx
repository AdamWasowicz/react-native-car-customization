import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StackNavigationParams } from '../../components/Navigation/types';


const useAuthenticationPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();
    
    const navigateToLoginWithPhotoPage= () => {
        navigation.navigate("LoginWithPhotoPage", {})
    }

    const navigateToLoginWithTextPage= () => {
        navigation.navigate("LoginWithTextPage", {})
    }

    const navigateToRegister = () => {
        navigation.navigate("RegisterUserPage", {})
    }

    return {
        navigateToLoginWithPhotoPage, navigateToRegister,
        navigateToLoginWithTextPage
    }
};


export default useAuthenticationPage;