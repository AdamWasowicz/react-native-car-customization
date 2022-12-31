import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomTabsNavigationParams, StackNavigationParams } from '../../components/Navigation/types';


const useAppNavigation = () => {
    const stackNavigator = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();
    const bottomTabsNavigator = useNavigation<BottomTabNavigationProp<BottomTabsNavigationParams>>();

    const moveToMainPage = () => {
        //Move to MainPage
        stackNavigator.navigate(
            "MainPage",
            {}
        )

        //Disable going back
        stackNavigator.reset({
            index: 0,
            routes: [{name: 'MainPage'}],
        });
    }

    return {
        stackNavigator, bottomTabsNavigator, moveToMainPage
    }
}

export default useAppNavigation;