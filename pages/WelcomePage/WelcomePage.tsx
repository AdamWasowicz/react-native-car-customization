import React from 'react';
import { View, Text, Pressable } from 'react-native';
import useWelcomePage from './utils';
import useWelcomePageStyle from './style';
import Button from '../../components/UI/Button';
import HeaderText from '../../components/UI/HeaderText';
import SmallText from '../../components/UI/SmallText';
import MediumText from '../../components/UI/MediumText';


const WelcomePage: React.FC = () => {
    const { moveToMainPage } = useWelcomePage();
    const style = useWelcomePageStyle();''

    return (
        <View style={style.root}>
            <View>
                <HeaderText style={{textAlign: 'center'}}>CarApp</HeaderText>
                <MediumText style={{textAlign: 'center'}}>
                    Witaj w aplikacji służącej do wygodnego dostosowywania parametrów samochodu
                </MediumText>  
            </View>
            <Button
                caption="Przejdz do aplikacji"
                onPress={moveToMainPage}
                buttonStyle={{marginBottom: 16}}
            />
        </View>
    )
}

export default WelcomePage;