import React from "react";
import { StyleSheet, Text } from "react-native";
import useAppColorScheme from "../../../hooks/useAppColorScheme";


interface MediumTextProps {
    children: string,
    style?: {}
}


const MediumText: React.FC<MediumTextProps> = (props) => {
    const appColorScheme = useAppColorScheme();

    const style = StyleSheet.create({
        root: {
            fontSize: 20,
            fontFamily: 'Lato-Regular',
            color: appColorScheme.textColor,
        }
    })

    return (
        <Text style={[style.root, props.style]}>
            {props.children}
        </Text>
    )
}


export default MediumText;