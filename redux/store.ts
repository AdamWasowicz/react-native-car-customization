import { configureStore } from '@reduxjs/toolkit';

//Reducers
import AuthReducer from './features/auth-slice';

//Store
export const store = configureStore({
    reducer: {
        auth: AuthReducer,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;