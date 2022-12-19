import React from 'react';
import { View, StyleSheet } from 'react-native';
import BigText from '../../../components/UI/BigText';
import Button from '../../../components/UI/Button';
import MediumText from '../../../components/UI/MediumText';

interface InformationViewProps {
    onClick: () => void,
}

const InformationView: React.FC<InformationViewProps> = (props) => {
    const style = StyleSheet.create({
        root: {
            padding: 16,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },

        bText: {
            textAlign: 'center',
            marginBottom: 16,
        },
        
        mText: {
            textAlign: 'center',
            marginBottom: 16,
        }
    })


    return (
        <View style={style.root}>
            <View>
                <BigText style={style.bText}>
                    Jak się zarejestrować?
                </BigText>

                <MediumText style={style.mText}>
                    Najpierw musisz podać swój email oraz hasło, będą służyły do awaryjnego logowania się do systemu. Potem będziesz musiał/musiała wykonać kilka swoich zdjęć aby system nauczył się ciebie rozpoznawać.
                </MediumText>
            </View>

            <Button
                caption={"Przejdź dalej"}
                onPress={props.onClick}
                buttonStyle={{marginBottom: 24}}
            />
        </View>
    )
}

export default InformationView;