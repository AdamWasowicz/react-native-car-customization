import React from 'react';
import { View, Text, Pressable } from 'react-native';
import useWelcomePage from './utils';
import useWelcomePageStyle from './style';
import Button from '../../components/UI/Button';


const WelcomePage: React.FC = () => {

    const { moveToMainPage } = useWelcomePage();
    const style = useWelcomePageStyle();''

    return (
        <View style={style.root}>
            <View>
                <Text style={style.headerText}>CarApp</Text>
                <Text style={style.subText}>
                    Witaj w aplikacji służącej do wygodnego dostosowywania parametrów samochodu
                </Text>
            </View>
            <Button
                caption="Przejdz do aplikacji"
                onPress={moveToMainPage}
            />
        </View>
    )
}

export default WelcomePage;