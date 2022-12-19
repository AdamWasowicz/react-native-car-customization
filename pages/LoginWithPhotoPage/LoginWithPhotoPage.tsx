import React from 'react';
import { View } from 'react-native';
import useLoginWithPhotoPage from './utils';
import useStyle from './style';
import { Ionicons } from "@expo/vector-icons";
import useAppColorScheme from '../../hooks/useAppColorScheme';
import Button from '../../components/UI/Button';


const LoginWithPhotoPage: React.FC = () => {
    const {
        onClickHandler
    } = useLoginWithPhotoPage();
    
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
                    caption={'Zrób zdjęcie'}
                    onPress={onClickHandler}
                    buttonStyle={{marginBottom: 24}}
                />
        </View>
    )
}

export default LoginWithPhotoPage;