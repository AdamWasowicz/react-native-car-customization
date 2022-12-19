import React from 'react';
import { View } from 'react-native';
import Button from '../../components/UI/Button';
import HeaderText from '../../components/UI/HeaderText';
import style from './style';
import useAuthenticationPage from './utils';


const AuthenticationPage: React.FC = () => {
    const {
        navigateToLoginWithPhotoPage, navigateToRegister,
        navigateToLoginWithTextPage
    } = useAuthenticationPage();

    return (
        <View style={style.root}>
            <HeaderText style={style.center}>Co chcesz zrobić?</HeaderText>

            <View style={style.buttonContainer}>
                <Button
                    caption={"Logowanie zdjęciem"}
                    onPress={navigateToLoginWithPhotoPage}
                    buttonStyle={style.marginBottomMedium}
                />

                <Button
                    caption={"Logowanie hasłem i adresem e-mail"}
                    onPress={navigateToLoginWithTextPage}
                    buttonStyle={style.marginBottomMedium}
                />

                <Button
                    caption={"Rejestracja"}
                    onPress={navigateToRegister}
                />
            </View>
        </View>
    )
}

export default AuthenticationPage;