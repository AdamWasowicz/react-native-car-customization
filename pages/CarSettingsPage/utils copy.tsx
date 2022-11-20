import React, {useState} from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setDriverMirrorTiltX, setDriverMirrorTiltY, setDriverSeatTilt, setPassengerSeatTilt, setPassengerSeatTiltMirrorTiltX, setPassengerSeatTiltMirrorTiltY } from '../../redux/features/carSettings-slice';


const useCarSettingsPage = () => {
    const dispatch = useAppDispatch();

    const [driverSeatTilt, sDriverSeatTilt] = useState<number>(0);
    const [passengerSeatTilt, sPassengerSeatTilt] = useState<number>(0);
    const [driverMirrorTiltX, sDriverMirrorTiltX] = useState<number>(0);
    const [driverMirrorTiltY, sDriverMirrorTiltY] = useState<number>(0);
    const [passengerSeatTiltMirrorTiltX, sPassengerSeatTiltMirrorTiltX] = useState<number>(0);
    const [passengerSeatTiltMirrorTiltY, sPassengerSeatTiltMirrorTiltY] = useState<number>(0);


    const handleDriverSeatTiltChange = (value: number) => {
        sDriverSeatTilt(value);
    }

    const handlePassengerSeatTiltChange = (value: number) => {
        sPassengerSeatTilt(value);
    }

    const handleDriverMirrorTiltXChange = (value: number) => {
        sDriverMirrorTiltX(value);
    }

    const handleDriverMirrorTiltYChange = (value: number) => {
        sDriverMirrorTiltY(value);
    }

    const handlePassengerSeatTiltMirrorTiltXChange = (value: number) => {
        sPassengerSeatTiltMirrorTiltX(value);
    }

    const handlePassengerSeatTiltMirrorTiltYChange = (value: number) => {
        sPassengerSeatTiltMirrorTiltY(value);
    }


    const handleDataSave = () => {
        dispatch(setDriverSeatTilt(driverSeatTilt));
        dispatch(setPassengerSeatTilt(passengerSeatTilt));
        dispatch(setDriverMirrorTiltX(driverMirrorTiltX));
        dispatch(setDriverMirrorTiltY(driverMirrorTiltY));
        dispatch(setPassengerSeatTiltMirrorTiltX(passengerSeatTiltMirrorTiltX));
        dispatch(setPassengerSeatTiltMirrorTiltY(passengerSeatTiltMirrorTiltY));
    }

    

    return {
        //Fields
        driverSeatTilt,
        passengerSeatTilt,
        driverMirrorTiltX,
        driverMirrorTiltY,
        passengerSeatTiltMirrorTiltX,
        passengerSeatTiltMirrorTiltY,

        //Functions
        handleDriverSeatTiltChange,
        handlePassengerSeatTiltChange,
        handleDriverMirrorTiltXChange,
        handleDriverMirrorTiltYChange,
        handlePassengerSeatTiltMirrorTiltXChange,
        handlePassengerSeatTiltMirrorTiltYChange,
        handleDataSave,
    }
}

export default useCarSettingsPage;