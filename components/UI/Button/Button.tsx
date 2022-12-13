import React from 'react';
import { Pressable, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import useAppColorScheme from '../../../hooks/useAppColorScheme';

interface ButtonProps {
    buttonStyle?: {},
    button_PressedStyle?: {},
    textStyle?: {},
    onPress?: () => void,
    caption: String
}

const Button: React.FC<ButtonProps> = (props) => {
    const appColorScheme = useAppColorScheme();
    const style = StyleSheet.create({
        button: {
            backgroundColor: appColorScheme.button,
            minHeight: 64,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 8,
        },
    
        button_Pressed: {
            backgroundColor: appColorScheme.buttonPressed,
        },
    
        buttonText: {
            color: appColorScheme.buttonTextColor,
            fontSize: 32,
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
        }
    });

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


export default Button;