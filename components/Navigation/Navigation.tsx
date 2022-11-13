import React from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch } from "../../redux/hooks";
import { BottomTabsNavigationParams, StackNavigationParams } from "./types";
import HomePage from "../../pages/HomePage";
import WelcomePage from "../../pages/WelcomePage";
import IconButton from "../UI/IconButton";
import AppOptionsPage from "../../pages/AppOptionsPage";
import appColorScheme from "../../constants/appColorScheme";
import style from './style';
import CarSettingsPage from "../../pages/CarSettingsPage";


//Navigators
const StackNavigation = createNativeStackNavigator<StackNavigationParams>();
const BottomTabsNavigation = createBottomTabNavigator<BottomTabsNavigationParams>();


const Navigation: React.FC = () => {

    return (
        <NavigationContainer>
            <StackNavigation.Navigator
                defaultScreenOptions={{
                    headerShadowVisible: true,
                }}
            >
                <StackNavigation.Screen
                    name="WelcomePage"
                    component={WelcomePage}
                    options={{
                        headerShown: false,
                        animation: 'fade_from_bottom',
                    }}
                />

                <StackNavigation.Screen
                    name="MainPage"
                    component={Bottomtabs}
                    options={{
                        headerShown: false,
                        animation: 'slide_from_left'
                    }}
                />

                <StackNavigation.Screen
                    name="AppOptionsPage"
                    component={AppOptionsPage}
                    options={{
                        animation: 'slide_from_right'
                    }}
                />
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}

const Bottomtabs: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();

    return (
        <BottomTabsNavigation.Navigator
            screenOptions={{
                tabBarActiveTintColor: appColorScheme.blue,
                tabBarInactiveTintColor: 'gray',
                headerRight: ({tintColor}) =>
                    <IconButton
                        name='options'
                        size={40}
                        color={tintColor!}
                        onPress={() => {
                            navigation.navigate("AppOptionsPage", {});
                        }}
                        />,
                headerStyle: style.bottomTabsHeader,
            }}
            initialRouteName="HomePage"
        >
            <BottomTabsNavigation.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    headerTitle: "Strona Główna",
                    title: 'Strona Główna',
                    tabBarIcon: ({size, color}) => 
                        <Ionicons
                            name='home'
                            color={color}
                            size={size}
                            />
                }}
            />

            <BottomTabsNavigation.Screen
                name='TakePhotoPage'
                component={HomePage}
                options={{
                    headerTitle: "Uwierzytelnienie",
                    title: "Uwierzytelnienie",
                    tabBarIcon: ({size, color}) => 
                        <Ionicons
                            name='camera'
                            color={color}
                            size={size}
                            />
                }}
            />

            <BottomTabsNavigation.Screen
                name="SettingsPage"
                component={CarSettingsPage}
                options={{
                    headerTitle: "Ustawienia pojazdu",
                    title: "Ustawienia pojazdu",
                    tabBarIcon: ({size, color}) => 
                        <Ionicons
                            name='car'
                            color={color}
                            size={size}
                            />
                }}
            />
        </BottomTabsNavigation.Navigator>
    )
}

export default Navigation;