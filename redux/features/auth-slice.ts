import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AuthState {
    isAuthorized: boolean
};


const initialState: AuthState = {
    isAuthorized: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthorized(state: AuthState, action: PayloadAction<boolean>) {
            state.isAuthorized = action.payload;
        }
    }
});


export const { 
    setIsAuthorized, 
} = authSlice.actions;


export default authSlice.reducer;