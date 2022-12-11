import React from 'react';
import { View } from 'react-native';
import Button from '../../components/UI/Button';
import style from './style';
import useAuthenticationPage from './utils';


const AuthenticationPage: React.FC = () => {
    const {
        navigateToLogin, navigateToRegister
    } = useAuthenticationPage();

    return (
        <View style={style.root}>
            <Button
                caption={"Login"}
                onPress={navigateToLogin}
            />

            <Button 
                caption={"Rejestracja"}
                onPress={navigateToRegister}
            />
        </View>
    )
}

export default AuthenticationPage;