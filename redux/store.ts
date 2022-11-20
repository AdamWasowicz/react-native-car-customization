import { configureStore } from '@reduxjs/toolkit';


//Reducers
import carSettingsReducers from './features/carSettings-slice';
import appReducers from './features/app-slice';
import authReducers from './features/auth-slice';


//Store
export const store = configureStore({
    reducer: {
        carSettings: carSettingsReducers,
        app: appReducers,
        auth: authReducers,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;