import { StyleSheet } from 'react-native';
import appColorScheme from '../../constants/appColorScheme';

const useWelcomePageStyle = () => {
    return StyleSheet.create({
        root: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',

            backgroundColor: 'white',
            padding: 25,
        },

        headerText: {
            fontSize: 48,
            textAlign: 'center',
            fontFamily: 'Roboto-Bold',
            letterSpacing: 2,
        },

        subText: {
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Lato-Regular',
        },
    })
}

export default useWelcomePageStyle;