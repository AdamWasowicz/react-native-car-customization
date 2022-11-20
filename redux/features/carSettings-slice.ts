import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface carSettingsState {
    driverSeatTilt: number,
    passengerSeatTilt: number,

    driverMirrorTiltX: number,
    driverMirrorTiltY: number,

    passengerSeatTiltMirrorTiltX: number,
    passengerSeatTiltMirrorTiltY: number,
}


const initialState:carSettingsState = {
    driverSeatTilt: 90,
    passengerSeatTilt: 90,

    driverMirrorTiltX: 0,
    driverMirrorTiltY: 0,

    passengerSeatTiltMirrorTiltX: 0,
    passengerSeatTiltMirrorTiltY: 0,
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
            state.passengerSeatTiltMirrorTiltX = action.payload;
        },

        setPassengerSeatTiltMirrorTiltY(state: carSettingsState, action: PayloadAction<number>) {
            state.passengerSeatTiltMirrorTiltY = action.payload;
        },
    }
});


export const {
    setDriverSeatTilt, setPassengerSeatTilt,
    setDriverMirrorTiltX, setDriverMirrorTiltY,
    setPassengerSeatTiltMirrorTiltX, setPassengerSeatTiltMirrorTiltY,
} = carSettingsSlice.actions;


export default carSettingsSlice.reducer;