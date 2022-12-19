import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import BigText from '../../../components/UI/BigText';
import Button from '../../../components/UI/Button';
import MediumText from '../../../components/UI/MediumText';
import SimpleTextInput from '../../../components/UI/SimpleTextInput';
import { isValid } from '../../../utils/validators/EmailAndPasswordValidator';

interface EmailAndPasswordViewProps {
    onPress: () => void,
    email: string,
    password: string,
    handleEmailChange: (value: string) => void,
    handlePasswordChange: (value: string) => void
}

const EmailAndPasswordView: React.FC<EmailAndPasswordViewProps> = (props) => {
    const style = StyleSheet.create({
        root: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 16,
        },

        center: {
            textAlign: 'center',
        },

        inputContainer: {
            marginBottom: 16,
        },

        input: {
            backgroundColor: 'white',
        },
    })

    const onNext = () => {
        const valid = isValid(props.email, props.password)
        if (valid == false) {
            Alert.alert("Niepoprawnie wypełniony formularz", "sprawdź czy email jest poprawny oraz hasło ma przynajmniej 8 znaków");
            return;
        }

        props.onPress();
    }

    return (
        <View style={style.root}>
                <View>
                    <BigText style={[style.center, {marginBottom: 16}]}>Twoje dane do rejestracji</BigText>

                    <View style={style.inputContainer}>
                        <MediumText>Email:</MediumText>

                        <SimpleTextInput
                            value={props.email}
                            placeholder={"E-mail"}
                            onChangeText={props.handleEmailChange}
                            containerStyle={style.input}
                        />
                    </View>

                    <View style={style.inputContainer}>
                        <MediumText>Hasło:</MediumText>

                        <SimpleTextInput
                            value={props.password}
                            placeholder={"Hasło"}
                            onChangeText={props.handlePasswordChange}
                            containerStyle={style.input}
                            password={true}
                        />
                    </View>
                </View>

                <Button
                    onPress={onNext}
                    caption={"Zaakceptuj i przejdź dalej"}
                    textStyle={{fontSize: 24}}
                    buttonStyle={{marginBottom: 24}}
                />
            </View>
    )
}

export default EmailAndPasswordView;