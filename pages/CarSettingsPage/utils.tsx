import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setDriverMirrorTiltX, setDriverMirrorTiltY, setDriverSeatTilt, setPassengerSeatTilt, setPassengerSeatTiltMirrorTiltX, setPassengerSeatTiltMirrorTiltY } from '../../redux/features/carSettings-slice';
import NoPermission from '../../components/NoPermission';
import { View } from 'react-native';
import style from './style';
import SliderWithCaption from '../../components/UI/SliderWithCaption';
import Button from '../../components/UI/Button';


const useCarSettingsPage = () => {
    const carSettingsState = useAppSelector(state => state.carSettings);
    const isAuthorized = useAppSelector(state => state.auth.isAuthorized);
    const dispatch = useAppDispatch();


    const handleDriverSeatTiltChange = (value: number) => {
        dispatch(setDriverSeatTilt(value));
    }

    const handlePassengerSeatTiltChange = (value: number) => {
        dispatch(setPassengerSeatTilt(value));
    }

    const handleDriverMirrorTiltXChange = (value: number) => {
        dispatch(setDriverMirrorTiltX(value));
    }

    const handleDriverMirrorTiltYChange = (value: number) => {
        dispatch(setDriverMirrorTiltY(value));
    }

    const handlePassengerSeatTiltMirrorTiltXChange = (value: number) => {
        dispatch(setPassengerSeatTiltMirrorTiltX(value));
    }

    const handlePassengerSeatTiltMirrorTiltYChange = (value: number) => {
        dispatch(setPassengerSeatTiltMirrorTiltY(value));
    }


    const renderContent = (): JSX.Element => {
        if (isAuthorized == false)
            return <NoPermission/>
        else
            return (
                <View>
                    <SliderWithCaption
                caption={'Nachylenie siedzenia kierowcy'}
                sliderCaption={carSettingsState.driverSeatTilt.toFixed(0) + " Stopni"}
                minValue={90}
                maxValue={160}
                onValueChange={handleDriverSeatTiltChange}
                value={carSettingsState.driverSeatTilt}
            />

            <SliderWithCaption
                caption={'Nachylenie siedzenia pasażera'}
                sliderCaption={carSettingsState.passengerSeatTilt.toFixed(0) + " Stopni"}
                minValue={90}
                maxValue={160}
                onValueChange={handlePassengerSeatTiltChange}
                value={carSettingsState.passengerSeatTilt}
            />

            <SliderWithCaption
                caption={'Nachylenie lusterka kierowcy (oś X)'}
                sliderCaption={carSettingsState.driverMirrorTiltX.toFixed(0) + " Stopni"}
                minValue={-30}
                maxValue={30}
                onValueChange={handleDriverMirrorTiltXChange}
                value={carSettingsState.driverMirrorTiltX}
            />

            <SliderWithCaption
                caption={'Nachylenie lusterka kierowcy (oś Y)'}
                sliderCaption={carSettingsState.driverMirrorTiltY.toFixed(0) + " Stopni"}
                minValue={-30}
                maxValue={30}
                onValueChange={handleDriverMirrorTiltYChange}
                value={carSettingsState.driverMirrorTiltY}
            />

            <SliderWithCaption
                caption={'Nachylenie lusterka pasażera (oś X)'}
                sliderCaption={carSettingsState.passengerSeatTiltMirrorTiltX.toFixed(0) + " Stopni"}
                minValue={-30}
                maxValue={30}
                onValueChange={handlePassengerSeatTiltMirrorTiltXChange}
                value={carSettingsState.passengerSeatTiltMirrorTiltX}
            />

            <SliderWithCaption
                caption={'Nachylenie lusterka pasażera (oś Y)'}
                sliderCaption={carSettingsState.passengerSeatTiltMirrorTiltY.toFixed(0) + " Stopni"}
                minValue={-30}
                maxValue={30}
                onValueChange={handlePassengerSeatTiltMirrorTiltYChange}
                value={carSettingsState.passengerSeatTiltMirrorTiltY}
            />

            <Button
                caption={'Zastosuj ustawienia'}
                onPress={() => {}}
                buttonStyle={style.buttonLast}
            />
                </View>
            )
    }

    

    return {
        //Fields
        driverSeatTilt: carSettingsState.driverSeatTilt,
        passengerSeatTilt: carSettingsState.passengerSeatTilt,
        driverMirrorTiltX: carSettingsState.driverMirrorTiltX,
        driverMirrorTiltY: carSettingsState.driverMirrorTiltY,
        passengerSeatTiltMirrorTiltX: carSettingsState.passengerSeatTiltMirrorTiltX,
        passengerSeatTiltMirrorTiltY: carSettingsState.passengerSeatTiltMirrorTiltY,

        //Functions
        handleDriverSeatTiltChange,
        handlePassengerSeatTiltChange,
        handleDriverMirrorTiltXChange,
        handleDriverMirrorTiltYChange,
        handlePassengerSeatTiltMirrorTiltXChange,
        handlePassengerSeatTiltMirrorTiltYChange,

        renderContent,
    }
}

export default useCarSettingsPage;