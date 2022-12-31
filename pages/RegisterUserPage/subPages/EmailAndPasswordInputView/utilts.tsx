import React from 'react';
import { EmailAndPasswordUnputViewProps } from './EmailAndPasswordInputView';
import { Alert } from 'react-native';
import { isValid } from '../../../../utils/validators/EmailAndPasswordValidator';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setEmail, setPassword, setPasswordRepeat } from '../../../../redux/features/registerForm-slice';


const useEmailAndPasswordUnputView = (props: EmailAndPasswordUnputViewProps) => {
    const dispatch = useAppDispatch();

    const email = useAppSelector(state => state.registerForm.email);
    const password = useAppSelector(state => state.registerForm.password);
    const passwordRepeat = useAppSelector(state => state.registerForm.passwordRepeat);

    const handleEmailChange = (value: string) => {
        dispatch(setEmail(value));
    }

    const handlePasswordChange = (value: string) => {
        dispatch(setPassword(value));
    }

    const handlePasswordRepeatChange = (value: string) => {
        dispatch(setPasswordRepeat(value));
    }


    const onNextHandler = () => {
        const valid = isValid(email, password)
        if (valid == false) {
            Alert.alert("Niepoprawnie wypełniony formularz", "sprawdź czy email jest poprawny oraz hasło ma przynajmniej 8 znaków");
            return;
        }

        if (password != passwordRepeat) {
            Alert.alert("Niepoprawnie wypełniony formularz", "Hasło oraz powtórzone hasło są inne");
            return;
        }

        props.onPress();
    }


    return {
        email, password, passwordRepeat,
        onNextHandler, 
        handleEmailChange, handlePasswordChange, handlePasswordRepeatChange
    }
}

export default useEmailAndPasswordUnputView;