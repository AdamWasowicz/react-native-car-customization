import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AppState {
    colorTheme: 'light' | 'dark',
    advancedOptionsEnabled: boolean,
    apiAddress: string,
    isLoading: boolean,
}


const initialState: AppState = {
    colorTheme: 'light',
    advancedOptionsEnabled: false,
    apiAddress: "https://localhost",
    isLoading: false,
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
        },

        setIsLoading(state: AppState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        }
    }
})


export const {
    setLightTheme, setDarkTheme,
    setAdvancedOptionsEnabled, 
    setApiAddress, setIsLoading
} = appSlice.actions;


export default appSlice.reducer;