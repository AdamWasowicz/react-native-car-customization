import React from 'react';
import { View } from 'react-native';
import useAuthenticationPage from './utils';
import useStyle from './style';
import { Ionicons } from "@expo/vector-icons";
import useAppColorScheme from '../../hooks/useAppColorScheme';
import Button from '../../components/UI/Button';


const AuthenticationPage: React.FC = () => {

    const {
        onClickHandler
    } = useAuthenticationPage();
    const style = useStyle();
    const appColorScheme = useAppColorScheme();


    return (
        <View style={style.root}>
                <Ionicons
                    name='camera'
                    size={256 +  128}
                    color={appColorScheme.button}
                    style={{textAlign: 'center'}}
                />

                <Button
                    caption={'Uwierzytelnij'}
                    onPress={onClickHandler}
                />
        </View>
    )
}

export default AuthenticationPage;