import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import appColorScheme from '../../../constants/appColorScheme';


interface ButtonProps {
    buttonStyle?: {},
    button_PressedStyle?: {},
    textStyle?: {},
    onPress: () => void,
    caption: String
}

const Button: React.FC<ButtonProps> = (props) => {

    return (
        <Pressable
                onPress={props.onPress}
                style={({pressed}) => [
                    {...style.button, ...props.buttonStyle},
                    pressed && {...style.button_Pressed, ...props.button_PressedStyle}
                ]}
                >
                    <Text style={{...style.buttonText, ...props.textStyle}}>
                        {props.caption}
                    </Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: appColorScheme.blue,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },

    button_Pressed: {
        backgroundColor: appColorScheme.darkBlue,
    },


    buttonText: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Roboto-Regular',
    }
})

export default Button;