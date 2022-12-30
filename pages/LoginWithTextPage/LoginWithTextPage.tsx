import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../components/UI/Button';
import HeaderText from '../../components/UI/HeaderText';
import LoadingCover from '../../components/UI/LoadingCover';
import MediumText from '../../components/UI/MediumText';
import SimpleTextInput from '../../components/UI/SimpleTextInput';
import useLoginWithTextPage from './utils';


const LoginWithTextPage: React.FC = () => {
    const {
        email, password,
        handleReqestSend, handleEmailChange, handlePasswordChange,
        isLoading
    } = useLoginWithTextPage();

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
        <View style={{flex: 1}}>
            {
                isLoading &&
                <LoadingCover/>
            }

            <View style={style.root}>
                <View>
                    <HeaderText style={style.center}>Logowanie</HeaderText>

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
                </View>

                <Button
                    onPress={handleReqestSend}
                    caption={"Zaloguj"}
                    buttonStyle={{marginBottom: 24}}
                />
            </View>
        </View>
    )
}

export default LoginWithTextPage;