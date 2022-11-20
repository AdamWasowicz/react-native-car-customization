import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useAppColorScheme from '../../hooks/useAppColorScheme';
import MediumText from '../UI/MediumText';


const NoPermission: React.FC = () => {
    const appColorScheme = useAppColorScheme();

    return (
        <View>
            <Ionicons
                name='lock-closed'
                size={256 + 128}
                color={appColorScheme.button}
            />

            <MediumText style={{textAlign: 'center'}}>
                Przykro nam ale nie masz dostępu do tej zawartości, uwierzytelnij się by uzyskać do niej dostęp
            </MediumText>
        </View>
    )
}

export default NoPermission;