import React from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { BottomTabsNavigationParams, StackNavigationParams } from "./types";
import HomePage from "../../pages/HomePage";
import WelcomePage from "../../pages/WelcomePage";
import IconButton from "../UI/IconButton";
import AppOptionsPage from "../../pages/AppOptionsPage";
import CarSettingsPage from "../../pages/CarSettingsPage";
import useAppColorScheme from "../../hooks/useAppColorScheme";
import { useAppSelector } from "../../redux/hooks";
import AuthenticationPage from "../../pages/AuthenticationPage";
import LoginPage from "../../pages/LoginPage";
import RegiserUserPage from "../../pages/RegisterUserPage/RegiserUserPage";


//Navigators
const StackNavigation = createNativeStackNavigator<StackNavigationParams>();
const BottomTabsNavigation = createBottomTabNavigator<BottomTabsNavigationParams>();


const Navigation: React.FC = () => {
    const theme = useAppSelector(state => state.app.colorTheme)
    const appColorScheme = useAppColorScheme();

    return (
        <NavigationContainer>
            <StackNavigation.Navigator
                screenOptions={{
                    headerTintColor: appColorScheme.navigationTextColor,
                    navigationBarColor: appColorScheme.navigationBackground,
                    headerStyle: {
                        backgroundColor: appColorScheme.navigationBackground,   
                    },
                    contentStyle: {
                        backgroundColor: appColorScheme.background,
                    },
                    headerShadowVisible: true,
                    statusBarStyle: theme == 'light' ? 'dark' : 'light',
                }}
                initialRouteName={"MainPage"}
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
                        animation: 'slide_from_left',
                    }}
                    
                />

                <StackNavigation.Screen
                    name="AppOptionsPage"
                    component={AppOptionsPage}
                    options={{
                        animation: 'slide_from_right',
                        title: "Opcje"
                    }}
                />

                <StackNavigation.Screen
                    name="LoginPage"
                    component={LoginPage}
                    options={{
                        animation: 'slide_from_right',
                        title: "Logowanie"
                    }}
                />

                <StackNavigation.Screen
                    name="RegisterUserPage"
                    component={RegiserUserPage}
                    options={{
                        animation: 'slide_from_right',
                        title: "Rejestracja"
                    }}
                />
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}

const Bottomtabs: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParams>>();
    const appColorScheme = useAppColorScheme();

    return (
        <BottomTabsNavigation.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopColor: appColorScheme.bottomTabsInactive,
                    borderTopWidth: 1,
                },
                tabBarActiveTintColor: appColorScheme.bottomTabsActive,
                tabBarInactiveTintColor: appColorScheme.bottomTabsInactive,
                tabBarActiveBackgroundColor: appColorScheme.navigationBackground,
                tabBarInactiveBackgroundColor: appColorScheme.navigationBackground,
                headerTintColor: appColorScheme.navigationTextColor,
                headerBackgroundContainerStyle: {
                    backgroundColor: appColorScheme.navigationBackground,
                },
                headerRight: ({tintColor}) =>
                    <IconButton
                        name='options'
                        size={40}
                        color={tintColor!}
                        onPress={() => {
                            navigation.navigate("AppOptionsPage", {});
                        }}
                        />,
                headerStyle: {
                    backgroundColor: appColorScheme.navigationBackground,
                    borderBottomColor: appColorScheme.bottomTabsInactive,
                    borderBottomWidth: 1
                },

            }}
            initialRouteName="HomePage"
            sceneContainerStyle={{
                backgroundColor: appColorScheme.background,
            }}
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
                name='AuthenticationPage'
                component={AuthenticationPage}
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