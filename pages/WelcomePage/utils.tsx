import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StackNavigationParams } from '../../components/Navigation/types';


export const useWelcomePage = () => {

    const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();


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
    

    return {
        moveToMainPage,
    }
}

export default useWelcomePage;