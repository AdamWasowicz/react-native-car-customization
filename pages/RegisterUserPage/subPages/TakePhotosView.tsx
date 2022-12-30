import React, { useState } from 'react';
import { View, StyleSheet, Alert}  from 'react-native';
import Button from '../../../components/UI/Button';
import { Ionicons } from "@expo/vector-icons";
import useAppColorScheme from '../../../hooks/useAppColorScheme/useAppColorScheme';
import MediumText from '../../../components/UI/MediumText';
import { useAppDispatch } from '../../../redux/hooks';
import { setIsLoading } from '../../../redux/features/app-slice';
import useDeviceCamera from '../../../hooks/useDeviceCamera';


interface TakePhotosViewProps {
    onContinue: () => void,
    addImageToForm: (value: string) => void,
    requiredAmount: number,
}

const TakePhotosView: React.FC<TakePhotosViewProps> = (props) => {
    const [photoNumber, setPhotoNumber] = useState<number>(0);
    const appColorScheme = useAppColorScheme();
    const dispatch = useAppDispatch();
    const camera = useDeviceCamera();


    const takePhotoHandler = async () => {
        dispatch(setIsLoading(true));

        // Take photo
        try {
            const image = await camera.takePhotoAsBase64();
            props.addImageToForm(image);
            handleIncreasePhotoNumber();
        }
        catch (error) {
            console.log(error);

            Alert.alert("Błąd", "Nie udało się zrobić zdjęcia", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])
        }
        finally {
            dispatch(setIsLoading(false));
            return;
        }
    }

    const handleIncreasePhotoNumber = () => {
        setPhotoNumber(photoNumber + 1);
    }

    const getPhotoCounterText = (): string => {
        if (photoNumber < props.requiredAmount)
            return "Zdjęcie " + (photoNumber + 1) + " z " + props.requiredAmount;
        else
            return "Wszystkie zdjęcia zrobione";
    }


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
                    name={photoNumber < props.requiredAmount ? 'camera' : 'happy-outline' }
                    size={256 +  100}
                    color={appColorScheme.button}
                    style={{textAlign: 'center'}}
                />
                </View>
            </View>

            <Button
                caption={
                    photoNumber >= props.requiredAmount
                    ? "Zarejestruj"
                    : "Zrób zdjęcie"
                }
                onPress={
                    photoNumber >= props.requiredAmount
                    ? props.onContinue
                    : takePhotoHandler
                }
                buttonStyle={{marginBottom: 24}}
            />
        </View>
    )
}

export default TakePhotosView;