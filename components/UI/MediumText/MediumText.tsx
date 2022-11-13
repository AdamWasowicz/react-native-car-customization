import React from "react";
import { StyleSheet, Text } from "react-native";


interface MediumTextProps {
    children: string,
    style?: {}
}


const MediumText: React.FC<MediumTextProps> = (props) => {

    return (
        <Text style={[style.root, props.style]}>
            {props.children}
        </Text>
    )
}


const style = StyleSheet.create({
    root: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
    }
})


export default MediumText;