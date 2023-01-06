import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setDriverMirrorTiltX, setDriverMirrorTiltY, setDriverSeatTilt, setPassengerSeatTilt, setPassengerSeatTiltMirrorTiltX, setPassengerSeatTiltMirrorTiltY } from '../../redux/features/carSettings-slice';
import NoPermission from '../../components/NoPermission';
import { View } from 'react-native';
import style from './style';
import SliderWithCaption from '../../components/UI/SliderWithCaption';
import Button from '../../components/UI/Button';
import useFaceRecognitionApi from '../../hooks/useFaceRecognitionApi';
import { carSettingsModel } from '../../hooks/useFaceRecognitionApi/models';
import { Alert } from 'react-native';
import { setIsLoading } from '../../redux/features/app-slice';


const useCarSettingsPage = () => {
    const carSettingsState = useAppSelector(state => state.carSettings);
    const isAuthorized = useAppSelector(state => state.auth.isAuthorized);
    const dispatch = useAppDispatch();
    const frApiClient = useFaceRecognitionApi();


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

    const handleSettingsSave = async () => {
        dispatch(setIsLoading(true));
        try {
            const settings: carSettingsModel = {
                driverSeatTilt: carSettingsState.driverSeatTilt,
                passengerSeatTilt: carSettingsState.passengerSeatTilt,
                driverMirrorTiltX: carSettingsState.driverMirrorTiltX,
                driverMirrorTiltY: carSettingsState.driverMirrorTiltY,
                passengerMirrorTiltX: carSettingsState.passengerMirrorTiltX,
                passengerMirrorTiltY: carSettingsState.passengerMirrorTiltY,
            }
            const response = await frApiClient.postSettings(settings);
            Alert.alert("Sukces", "Udało się wprowadzić zmiany", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])
        }
        catch (error) {
            console.log(error)
            Alert.alert("Błąd", "nie udało się wprowadzić zmian", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])
        }
        finally {
            dispatch(setIsLoading(false));
        }
    }


    const renderContent = (): JSX.Element => {
        if (isAuthorized == false)
            return <NoPermission />
        else
            return (
                <View>
                    <SliderWithCaption
                        caption={'Nachylenie siedzenia kierowcy'}
                        sliderCaption={carSettingsState.driverSeatTilt.toFixed(0) + " Stopni"}
                        minValue={0}
                        maxValue={100}
                        onValueChange={handleDriverSeatTiltChange}
                        value={carSettingsState.driverSeatTilt}
                    />

                    <SliderWithCaption
                        caption={'Nachylenie siedzenia pasażera'}
                        sliderCaption={carSettingsState.passengerSeatTilt.toFixed(0) + " Stopni"}
                        minValue={0}
                        maxValue={100}
                        onValueChange={handlePassengerSeatTiltChange}
                        value={carSettingsState.passengerSeatTilt}
                    />

                    <SliderWithCaption
                        caption={'Nachylenie lusterka kierowcy (oś X)'}
                        sliderCaption={carSettingsState.driverMirrorTiltX.toFixed(0) + " Stopni"}
                        minValue={0}
                        maxValue={180}
                        onValueChange={handleDriverMirrorTiltXChange}
                        value={carSettingsState.driverMirrorTiltX}
                    />

                    <SliderWithCaption
                        caption={'Nachylenie lusterka kierowcy (oś Y)'}
                        sliderCaption={carSettingsState.driverMirrorTiltY.toFixed(0) + " Stopni"}
                        minValue={0}
                        maxValue={180}
                        onValueChange={handleDriverMirrorTiltYChange}
                        value={carSettingsState.driverMirrorTiltY}
                    />

                    <SliderWithCaption
                        caption={'Nachylenie lusterka pasażera (oś X)'}
                        sliderCaption={carSettingsState.passengerMirrorTiltX.toFixed(0) + " Stopni"}
                        minValue={0}
                        maxValue={180}
                        onValueChange={handlePassengerSeatTiltMirrorTiltXChange}
                        value={carSettingsState.passengerMirrorTiltX}
                    />

                    <SliderWithCaption
                        caption={'Nachylenie lusterka pasażera (oś Y)'}
                        sliderCaption={carSettingsState.passengerMirrorTiltY.toFixed(0) + " Stopni"}
                        minValue={0}
                        maxValue={180}
                        onValueChange={handlePassengerSeatTiltMirrorTiltYChange}
                        value={carSettingsState.passengerMirrorTiltY}
                    />

                    <Button
                        caption={'Zastosuj ustawienia'}
                        onPress={handleSettingsSave}
                        buttonStyle={style.buttonLast}
                    />
                </View>
            )
    }



    return {
        renderContent,
    }
}

export default useCarSettingsPage;