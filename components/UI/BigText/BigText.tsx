import React from "react";
import { StyleSheet, Text } from "react-native";
import useAppColorScheme from "../../../hooks/useAppColorScheme";
import { useAppSelector } from "../../../redux/hooks";


interface BigTextProps {
    children: string,
    style?: {}
}


const BigText: React.FC<BigTextProps> = (props) => {
    const appColorScheme = useAppColorScheme();

    const style = StyleSheet.create({
        root: {
            fontSize: 32,
            fontFamily: 'Lato-Bold',
            color: appColorScheme.textColor
        }
    })

    return (
        <Text style={[style.root, props.style]}>
            {props.children}
        </Text>
    )
}


export default BigText;