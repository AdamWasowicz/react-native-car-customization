import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import useAppColorScheme from '../../../hooks/useAppColorScheme';


interface SimpleTextInputProps {
    value: string,
    placeholder?: string | undefined
    onChangeText: (value: string) => void,
    containerStyle?: {},
    password?: boolean
}

const SimpleTextInput: React.FC<SimpleTextInputProps> = (props) => {
    const appColorScheme = useAppColorScheme();
    const style = StyleSheet.create({
        root: {
            height: 64,
            borderColor: appColorScheme.button,
            borderWidth: 4,
        },

        textInput: {
            padding: 16,
        }   
    });

    return (
        <View style={[style.root, props.containerStyle]}>
            <TextInput
                style={style.textInput}
                value={props.value}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                secureTextEntry={props.password}
            />
        </View>
    )
}

export default SimpleTextInput;