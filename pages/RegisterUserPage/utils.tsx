import React, { useState } from 'react';
import InformationView from './subPages/InformationView';
import EmailAndPasswordView from './subPages/EmailAndPasswordView';

const useRegisterUserPage = () => {
    const [formStep, setFormStep] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (value: string) => {
        setEmail(value);
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    }
    
    const increaseFormStep = () => {
        setFormStep(formStep + 1);
    }

    const returnInformationView = (): JSX.Element => {
        return <InformationView onClick={increaseFormStep}/>;
    }

    const returnEmailAndPasswordView = (): JSX.Element => {
        return <EmailAndPasswordView 
            onPress={increaseFormStep}
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
        />
    }

    const renderView = (): JSX.Element => {
        switch (formStep) {
            case 0:
                return returnInformationView();
            case 1:
                return returnEmailAndPasswordView();
            default:
                return returnInformationView();
        }
    }

    return {
        renderView, 
    }
}

export default useRegisterUserPage;