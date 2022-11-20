import React from 'react';
import { Text, StyleSheet } from 'react-native';
import useAppColorScheme from '../../../hooks/useAppColorScheme';
import { useAppSelector } from '../../../redux/hooks';


interface HeaderTextProps {
    children: string
    style?: {}
}


const HeaderText: React.FC<HeaderTextProps> = (props) => {
    const appColorScheme = useAppColorScheme();

    const style = StyleSheet.create({
        root: {
            fontSize: 48,
            fontFamily: 'Roboto-Regular',
            letterSpacing: 2,
            marginBottom: 8,
            color: appColorScheme.textColor,
        }
    })


    return (
        <Text
            style={
                [style.root, props.style != null ? props.style : {}]
            }
        >
            {props.children}
        </Text>
    )
}

export default HeaderText;