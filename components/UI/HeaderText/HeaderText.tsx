import React from 'react';
import { Text, StyleSheet } from 'react-native';


interface HeaderTextProps {
    children: string
    style?: {}
}


const HeaderText: React.FC<HeaderTextProps> = (props) => {

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

const style = StyleSheet.create({
    root: {
        fontSize: 32,
        fontFamily: 'Roboto-Regular',
        letterSpacing: 2,
        marginBottom: 8,
    }
})

export default HeaderText;