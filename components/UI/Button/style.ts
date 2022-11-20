import { StyleSheet } from 'react-native';
import useAppColorScheme from '../../../hooks/useAppColorScheme';


const useStyle = () => {
    const appColorScheme = useAppColorScheme();

    return StyleSheet.create({
        button: {
            backgroundColor: appColorScheme.primary,
            height: 64,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 8,
        },
    
        button_Pressed: {
            backgroundColor: appColorScheme.primaryDark,
        },
    
        buttonText: {
            color: appColorScheme.textColor,
            fontSize: 24,
            fontFamily: 'Roboto-Regular',
        }
    })
}

export default useStyle();