import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import BigText from '../../../../components/UI/BigText';
import Button from '../../../../components/UI/Button';
import MediumText from '../../../../components/UI/MediumText';
import SimpleTextInput from '../../../../components/UI/SimpleTextInput';
import useEmailAndPasswordUnputView from './utilts';

export interface EmailAndPasswordUnputViewProps {
    onPress: () => void,
}

const EmailAndPasswordUnputView: React.FC<EmailAndPasswordUnputViewProps> = (props) => {
    const {
        email, password, passwordRepeat,
        onNextHandler, 
        handleEmailChange, handlePasswordChange, handlePasswordRepeatChange
    } = useEmailAndPasswordUnputView(props);


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


    return (
        <View style={style.root}>
                <View>
                    <BigText style={[style.center, {marginBottom: 16}]}>Twoje dane do rejestracji</BigText>

                    <View style={style.inputContainer}>
                        <MediumText>Email:</MediumText>

                        <SimpleTextInput
                            value={email}
                            placeholder={"E-mail"}
                            onChangeText={handleEmailChange}
                            containerStyle={style.input}
                        />
                    </View>

                    <View style={style.inputContainer}>
                        <MediumText>Hasło:</MediumText>

                        <SimpleTextInput
                            value={password}
                            placeholder={"Hasło"}
                            onChangeText={handlePasswordChange}
                            containerStyle={style.input}
                            password={true}
                        />
                    </View>

                    <View style={style.inputContainer}>
                        <MediumText>Powtórz Hasło:</MediumText>

                        <SimpleTextInput
                            value={passwordRepeat}
                            placeholder={"Powtórz Hasło"}
                            onChangeText={handlePasswordRepeatChange}
                            containerStyle={style.input}
                            password={true}
                        />
                    </View>
                </View>

                <Button
                    onPress={onNextHandler}
                    caption={"Zaakceptuj i przejdź dalej"}
                    textStyle={{fontSize: 24}}
                    buttonStyle={{marginBottom: 24}}
                />
            </View>
    )
}

export default EmailAndPasswordUnputView;