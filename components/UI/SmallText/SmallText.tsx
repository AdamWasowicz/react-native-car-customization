import React from 'react';
import { Text, StyleSheet } from 'react-native';


interface SmallTextProps {
    children: string,
    style?: {}
}


const SmallText: React.FC<SmallTextProps> = (props) => {

    return (
        <Text style={[style.root, props.style]}>
            {props.children}
        </Text>
    )
}


const style = StyleSheet.create({
    root: {
        fontSize: 18,
        fontFamily: 'Lato-Regular',
    }
})


export default SmallText;