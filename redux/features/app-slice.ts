import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AppState {
    colorTheme: 'light' | 'dark',
}


const initialState: AppState = {
    colorTheme: 'light',
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
    }
})


export const {
    setLightTheme, setDarkTheme
} = appSlice.actions;


export default appSlice.reducer;