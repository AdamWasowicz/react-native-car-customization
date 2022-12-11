import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import useAppColorScheme from '../../../hooks/useAppColorScheme';
import IconButton from '../IconButton';
import SmallText from '../SmallText';

interface TextInputWithButtonsProps {
    value: string,
    onChange: (value: string) => void,
    onSave: () => void,
    onReset: () => void,
    caption: string,
    externalStyle?: {},
    placeholderText: string
}

const TextInputWithButtons: React.FC<TextInputWithButtonsProps> = (props) => {
    const appColorScheme = useAppColorScheme();

    const style = StyleSheet.create({
        root: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
        },

        input: {
            flex: 3,
            height: 60,
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderColor: appColorScheme.button,
            borderWidth: 4,
            borderRightWidth: 0,
            backgroundColor: 'white'
        },

        button: {
            flex: 1,
            backgroundColor: appColorScheme.button,
            height: 60,
        },
    });

    return (
        <View>
            <SmallText
                children={props.caption}
                style={{marginBottom: 8}}
            />

            <View style={style.root}>

                <TextInput
                    value={props.value}
                    onChangeText={props.onChange}
                    style={[style.input, props.externalStyle]}
                    placeholder={props.placeholderText}
                />

                <IconButton
                    onPress={props.onReset}
                    size={36}
                    color={appColorScheme.buttonTextColor}
                    rootStyle={style.button}
                    name="refresh-outline"
                />

                <IconButton
                    onPress={props.onSave}
                    size={36}
                    color={appColorScheme.buttonTextColor}
                    rootStyle={style.button}
                    name="checkmark-outline"
                />
            </View>
        </View>
    );
}

export default TextInputWithButtons;