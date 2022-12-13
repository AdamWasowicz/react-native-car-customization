import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native'; 
import useAppColorScheme from '../../../hooks/useAppColorScheme';


const LoadingCover: React.FC = () => {
    const style = StyleSheet.create({
        overlayLoadingContainer:{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent:'center',
            alignItems:'center',
            zIndex: 1,
            backgroundColor: 'black',
            opacity: 0.5
         },
    })

    const appColorScheme = useAppColorScheme();

    
    return (
        <View style={style.overlayLoadingContainer}>
            <ActivityIndicator
                size={100}
                animating={true}
                color={appColorScheme.button}
            />
        </View>
    )
}

export default LoadingCover;