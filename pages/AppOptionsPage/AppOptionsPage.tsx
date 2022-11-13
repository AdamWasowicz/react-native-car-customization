import React from 'react';
import { View } from 'react-native';
import style from './style';
import HeaderText from '../../components/UI/HeaderText';
import MediumText from '../../components/UI/MediumText';
import SmallText from '../../components/UI/SmallText';
import Slider from '@react-native-community/slider';
import appColorScheme from '../../constants/appColorScheme';
import useAppOptionsPage from './utils';


const AppOptionsPage: React.FC = () => {

    const {
        
    } = useAppOptionsPage();

    return (
        <View style={style.root}>
            <View>
                <HeaderText>App Options Page</HeaderText>
            </View>
        </View>
    )
}

export default AppOptionsPage;