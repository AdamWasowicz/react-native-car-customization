import React from 'react';
import { Text, StyleSheet } from 'react-native';
import useAppColorScheme from '../../../hooks/useAppColorScheme/useAppColorScheme';
import { useAppSelector } from '../../../redux/hooks';


interface SmallTextProps {
    children: string,
    style?: {}
}


const SmallText: React.FC<SmallTextProps> = (props) => {
    const appColorScheme = useAppColorScheme();

    const style = StyleSheet.create({
        root: {
            fontSize: 18,
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


export default SmallText;