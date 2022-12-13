import React from 'react';
import { StyleSheet } from 'react-native';


const useStyle = () => {

    return StyleSheet.create({
        root: {
            flex: 1,
            padding: 16,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }
    })
}

export default useStyle;