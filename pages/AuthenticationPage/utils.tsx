import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StackNavigationParams } from '../../components/Navigation/types';


const useAuthenticationPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();
    
    const navigateToLogin = () => {
        navigation.navigate("LoginPage", {})
    }

    const navigateToRegister = () => {
        navigation.navigate("RegisterUserPage", {})
    }

    return {
        navigateToLogin, navigateToRegister
    }
};


export default useAuthenticationPage;