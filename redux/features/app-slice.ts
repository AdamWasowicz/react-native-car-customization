import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AppState {
    colorTheme: 'light' | 'dark',
    advancedOptionsEnabled: boolean,
    apiAddress: string,
}


const initialState: AppState = {
    colorTheme: 'light',
    advancedOptionsEnabled: false,
    apiAddress: "localhost:5000",
}


const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLightTheme(state: AppState) {
            state.colorTheme = 'light';
        },

        setDarkTheme(state: AppState) {
            state.colorTheme = 'dark';
        },

        setAdvancedOptionsEnabled(state: AppState, action: PayloadAction<boolean>) {
            state.advancedOptionsEnabled = action.payload;
        },

        setApiAddress(state: AppState, action: PayloadAction<string>) {
            state.apiAddress = action.payload;
            console.log(action.payload);
        }
    }
})


export const {
    setLightTheme, setDarkTheme,
    setAdvancedOptionsEnabled, 
    setApiAddress,
} = appSlice.actions;


export default appSlice.reducer;