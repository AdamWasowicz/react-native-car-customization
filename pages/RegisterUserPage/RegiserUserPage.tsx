import React from 'react';
import { View } from 'react-native';
import useRegisterUserPage from './utils';

const RegiserUserPage: React.FC = () => {
    const {
        renderView
    } = useRegisterUserPage();

    return (
        <View style={{flex: 1}}>
            {
                renderView()
            }
        </View>
    )
}

export default RegiserUserPage;