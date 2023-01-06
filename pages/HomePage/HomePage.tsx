import React from 'react';
import { View, ScrollView } from 'react-native';
import HeaderText from '../../components/UI/HeaderText';
import SmallText from '../../components/UI/SmallText';
import MediumText from '../../components/UI/MediumText';
import BigText from '../../components/UI/BigText';
import style from './style';
import useHomePage from './utils';


const HomePage: React.FC = () => {
    const {} = useHomePage();
    
    
    return (
        <ScrollView style={style.root}>
            <View style={style.marginBottomBig}>
                <HeaderText style={[style.center, style.marginBottomSmall]}>
                    Samoapka
                </HeaderText>

                <MediumText style={style.center}>
                    Witaj w aplikacji służącej do wygodnego dostosowywania parametrów samochodu
                </MediumText>
            </View>

            <View style={style.marginBottomBig}>
                <BigText style={[style.center, style.marginBottomSmall]}>
                    Jak użyć
                </BigText>

                <SmallText style={style.center}>
                    Przed użyciem aplikacji musisz się uwierzytelnić, musimy mieć pewność że masz uprawnienia do korzystania z tego pojadzu
                </SmallText>
            </View>

            <View style={style.marginBottomBig}>
                <BigText style={[style.center, style.marginBottomSmall]}>
                    Po zalogwaniu się
                </BigText>

                <SmallText style={style.center}>
                    Po zalogowaniu uzyskasz dostęp do panelu "Ustawienia pojazdu" w którym będziesz miał możliwość dostosowywania auta do swoich potrzeb
                </SmallText>
            </View>
        </ScrollView>
    )
}

export default HomePage;