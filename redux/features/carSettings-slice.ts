import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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
    }
});


export const {
    setDriverSeatTilt, setPassengerSeatTilt,
    setDriverMirrorTiltX, setDriverMirrorTiltY,
    setPassengerSeatTiltMirrorTiltX, setPassengerSeatTiltMirrorTiltY,
} = carSettingsSlice.actions;


export default carSettingsSlice.reducer;