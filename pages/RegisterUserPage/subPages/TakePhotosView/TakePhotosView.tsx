import React from 'react';
import { View, StyleSheet, Alert}  from 'react-native';
import Button from '../../../../components/UI/Button';
import { Ionicons } from "@expo/vector-icons";
import useAppColorScheme from '../../../../hooks/useAppColorScheme/useAppColorScheme';
import MediumText from '../../../../components/UI/MediumText';
import useTakePhotosView from './utils';


export interface TakePhotosViewProps {
    onContinue: () => void,
}


const TakePhotosView: React.FC<TakePhotosViewProps> = (props) => {
    const {
        photoNumber, requiredAmount,
        takePhotoHandler, getPhotoCounterText
    } = useTakePhotosView(props);

    const appColorScheme = useAppColorScheme();
    const style = StyleSheet.create({
        root: {
            padding: 16,
            flex: 1,
            justifyContent: 'space-between'
        }
    })


    return (
        <View style={style.root}>
            <View>
                <MediumText style={{textAlign: 'center'}}>
                    {getPhotoCounterText()}
                </MediumText>

                <View style={{alignItems: 'center'}}>
                <Ionicons
                    name={photoNumber < requiredAmount ? 'camera' : 'happy-outline' }
                    size={256 +  100}
                    color={appColorScheme.button}
                    style={{textAlign: 'center'}}
                />
                </View>
            </View>

            <Button
                caption={
                    photoNumber >= requiredAmount
                    ? "Zarejestruj"
                    : "Zrób zdjęcie"
                }
                onPress={
                    photoNumber >= requiredAmount
                    ? props.onContinue
                    : takePhotoHandler
                }
                buttonStyle={{marginBottom: 24}}
            />
        </View>
    )
}

export default TakePhotosView;