import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AuthState {
    isAuthorized: boolean,
    token: string,
};


const initialState: AuthState = {
    isAuthorized: true,
    token: '',
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthorized(state: AuthState, action: PayloadAction<boolean>) {
            state.isAuthorized = action.payload;
        },

        setToken(state: AuthState, action: PayloadAction<string>) {
            state.token = action.payload;
        }
    }
});


export const { 
    setIsAuthorized, setToken 
} = authSlice.actions;


export default authSlice.reducer;