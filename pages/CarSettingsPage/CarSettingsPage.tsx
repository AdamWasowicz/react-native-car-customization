import React from 'react';
import { View } from 'react-native';
import style from './style';
import HeaderText from '../../components/UI/HeaderText';
import MediumText from '../../components/UI/MediumText';
import SmallText from '../../components/UI/SmallText';
import Slider from '@react-native-community/slider';
import appColorScheme from '../../constants/appColorScheme';
import useCarSettingsPage from './utils';


const CarSettingsPage: React.FC = () => {

    const {
        driverSeatTilt, handleDriverSeatTiltChange
    } = useCarSettingsPage();

    return (
        <View style={style.root}>
            <View>
                <MediumText style={style.center}>Nachylenie siedzenia kierowcy</MediumText>
                <SmallText style={style.center}>{driverSeatTilt.toFixed(0) + " Stopni"}</SmallText>
                <Slider
                    minimumValue={90}
                    maximumValue={160}
                    minimumTrackTintColor={appColorScheme.aqua}
                    maximumTrackTintColor={appColorScheme.purple}
                    onValueChange={handleDriverSeatTiltChange}
                    value={driverSeatTilt}
                />
            </View>
        </View>
    )
}

export default CarSettingsPage;