import React from 'react';
import { View } from 'react-native';
import HeaderText from '../../components/UI/HeaderText';
import style from './style';
import ToggleSwitch from 'toggle-switch-react-native';
import lightColorScheme from '../../constants/style/lightColorScheme';
import darkColorScheme from '../../constants/style/darkColorScheme';
import useAppOptionsPage from './utils';
import Button from '../../components/UI/Button';


const AppOptionsPage: React.FC = () => {

    const {
        motiveToggle, handleMotiveToggle,
        isAuthorized, handleLogOut
    } = useAppOptionsPage();

    return (
        <View style={style.root}>
            <View>
                <HeaderText>Motyw ciemny</HeaderText>
                <ToggleSwitch
                    isOn={motiveToggle}
                    onToggle={handleMotiveToggle}
                    size={'large'}
                    onColor={darkColorScheme.accent}
                    offColor={lightColorScheme.primaryDark}
                />
            </View>

            {
                isAuthorized && 
                <View style={style.marginBottomMedium}>
                    <Button 
                        caption={'Wyloguj'}
                        onPress={handleLogOut}
                    />
                </View>
            }
        </View>
    )
}

export default AppOptionsPage;