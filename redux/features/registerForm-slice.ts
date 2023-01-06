import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface RegisterFormState {
    email: string,
    password: string,
    passwordRepeat: string,

    photos: string[],
    amountOfPhotosRequired: number,
}


const initialState: RegisterFormState = {
    email: "",
    password: "",
    passwordRepeat: "",
    
    photos: [],
    amountOfPhotosRequired: 4,
}

const RegisterFormSlice = createSlice({
    name: 'registerForm',
    initialState,
    reducers: {
        setEmail(state: RegisterFormState, action: PayloadAction<string>) {
            state.email = action.payload;
        },

        setPassword(state: RegisterFormState, action: PayloadAction<string>) {
            state.password = action.payload;
        },

        setPasswordRepeat(state: RegisterFormState, action: PayloadAction<string>) {
            state.passwordRepeat = action.payload;
        },

        addPhoto(state: RegisterFormState, action: PayloadAction<string>) {
            state.photos = [action.payload, ...state.photos];
        },

        setPhotos(state: RegisterFormState, action: PayloadAction<string[]>) {
            state.photos = action.payload;
        },

        clearForm(state: RegisterFormState) {
            state.email = initialState.email;
            state.password = initialState.password;
            state.passwordRepeat = initialState.passwordRepeat;
            state.photos = initialState.photos;
        }
    }
})


export const {
    setEmail, setPassword, setPasswordRepeat,
    addPhoto, setPhotos, clearForm
} = RegisterFormSlice.actions;


export default RegisterFormSlice.reducer;