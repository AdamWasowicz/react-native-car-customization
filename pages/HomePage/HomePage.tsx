import React from 'react';
import { View, Text } from 'react-native';
import HeaderText from '../../components/UI/HeaderText';
import SmallText from '../../components/UI/SmallText';
import style from './style';


const HomePage: React.FC = () => {

    return (
        <View style={style.root}>
            <View>
                <HeaderText>HomePage</HeaderText>
                <SmallText>Witamy na HomePage</SmallText>
            </View>         
        </View>
    )
}

export default HomePage;