import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import useAppColorScheme from '../../../hooks/useAppColorScheme';
import { useAppSelector } from '../../../redux/hooks';


const LoadingCover: React.FC = () => {
    const style = StyleSheet.create({
        overlayLoadingContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            backgroundColor: 'black',
            opacity: 0.75
        },
    })

    const appColorScheme = useAppColorScheme();
    const isLoading = useAppSelector(state => state.app.isLoading);

    if (isLoading)
        return (
            <View style={style.overlayLoadingContainer}>
                <ActivityIndicator
                    size={200}
                    animating={true}
                    color={appColorScheme.button}
                />
            </View>

        )
    else
        return <></>
}

export default LoadingCover;