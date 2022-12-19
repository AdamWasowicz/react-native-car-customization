import React from 'react';
import { View } from 'react-native';
import style from './style';
import ToggleSwitch from 'toggle-switch-react-native';
import lightColorScheme from '../../constants/style/lightColorScheme';
import darkColorScheme from '../../constants/style/darkColorScheme';
import useAppOptionsPage from './utils';
import Button from '../../components/UI/Button';
import BigText from '../../components/UI/BigText';
import TextInputWithButton from '../../components/UI/TextInputWithButtons';


const AppOptionsPage: React.FC = () => {

    const {
        motiveToggle, handleMotiveToggle,
        isAuthorized, handleLogOut,
        advancedOptionsToggle, handleAdvancedOptionsToggle,
        apiAddressInput, setApiAddressInput, handleApiAddressChange, handleApiAddressReset
    } = useAppOptionsPage();

    return (
        <View style={style.root}>
            <View style={style.marginBottomMedium}>
                <BigText>Motyw ciemny</BigText>

                <ToggleSwitch
                    isOn={motiveToggle}
                    onToggle={handleMotiveToggle}
                    size={'large'}
                    onColor={darkColorScheme.accent}
                    offColor={lightColorScheme.primaryDark}
                />
            </View>

            <View style={style.marginBottomMedium}>
                <BigText>Zaawansowane Opcje</BigText>

                <ToggleSwitch
                    isOn={advancedOptionsToggle}
                    onToggle={handleAdvancedOptionsToggle}
                    size={'large'}
                    onColor={darkColorScheme.accent}
                    offColor={lightColorScheme.primaryDark}
                    
                />

                {
                    advancedOptionsToggle &&
                    <View style={style.marginTopMedium}>
                        <TextInputWithButton
                            value={apiAddressInput}
                            onChange={setApiAddressInput}
                            onSave={handleApiAddressChange}
                            onReset={handleApiAddressReset}
                            placeholderText={"Adres API"}
                            caption={"Adres API"}
                        />
                    </View>
                }
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