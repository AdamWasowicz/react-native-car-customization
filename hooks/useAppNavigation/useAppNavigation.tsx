import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomTabsNavigationParams, StackNavigationParams } from '../../components/Navigation/types';


const useAppNavigation = () => {
    const stackNavigator = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();
    const bottomTabsNavigator = useNavigation<BottomTabNavigationProp<BottomTabsNavigationParams>>();

    return {
        stackNavigator, bottomTabsNavigator
    }
}

export default useAppNavigation;