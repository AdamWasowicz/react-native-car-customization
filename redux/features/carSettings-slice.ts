import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { carSettingsModel } from '../../hooks/useFaceRecognitionApi/models';


interface carSettingsState {
    driverSeatTilt: number,
    passengerSeatTilt: number,

    driverMirrorTiltX: number,
    driverMirrorTiltY: number,

    passengerMirrorTiltX: number,
    passengerMirrorTiltY: number,
}


const initialState:carSettingsState = {
    driverSeatTilt: 90,
    passengerSeatTilt: 90,

    driverMirrorTiltX: 0,
    driverMirrorTiltY: 0,

    passengerMirrorTiltX: 0,
    passengerMirrorTiltY: 0,
}


const carSettingsSlice = createSlice({
    name: 'carSettings',
    initialState,
    reducers: {
        setDriverSeatTilt(state: carSettingsState, action: PayloadAction<number>) {
            state.driverSeatTilt = action.payload;
        },

        setPassengerSeatTilt(state: carSettingsState, action: PayloadAction<number>) {
            state.passengerSeatTilt = action.payload;
        },

        setDriverMirrorTiltX(state: carSettingsState, action: PayloadAction<number>) {
            state.driverMirrorTiltX = action.payload;
        },

        setDriverMirrorTiltY(state: carSettingsState, action: PayloadAction<number>) {
            state.driverMirrorTiltY = action.payload;
        },

        setPassengerSeatTiltMirrorTiltX(state: carSettingsState, action: PayloadAction<number>) {
            state.passengerMirrorTiltX = action.payload;
        },

        setPassengerSeatTiltMirrorTiltY(state: carSettingsState, action: PayloadAction<number>) {
            state.passengerMirrorTiltY = action.payload;
        },

        setAllSettigns(state: carSettingsState, action: PayloadAction<carSettingsModel>) {
            state.driverMirrorTiltX = action.payload.driverMirrorTiltX;
            state.driverMirrorTiltY = action.payload.driverMirrorTiltY;

            state.passengerMirrorTiltX = action.payload.passengerMirrorTiltX;
            state.passengerMirrorTiltY = action.payload.passengerMirrorTiltY;

            state.driverSeatTilt = action.payload.driverSeatTilt;
            state.passengerSeatTilt = action.payload.passengerSeatTilt;
        }
    }
});


export const {
    setDriverSeatTilt, setPassengerSeatTilt,
    setDriverMirrorTiltX, setDriverMirrorTiltY,
    setPassengerSeatTiltMirrorTiltX, setPassengerSeatTiltMirrorTiltY,
    setAllSettigns,
} = carSettingsSlice.actions;


export default carSettingsSlice.reducer;