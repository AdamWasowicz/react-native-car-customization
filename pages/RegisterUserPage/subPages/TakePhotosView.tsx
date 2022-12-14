import React, { useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import { launchCameraAsync, ImagePickerOptions, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import Button from '../../../components/UI/Button';
import { Ionicons } from "@expo/vector-icons";
import useAppColorScheme from '../../../hooks/useAppColorScheme';
import MediumText from '../../../components/UI/MediumText';
import { useAppDispatch } from '../../../redux/hooks';
import { setIsLoading } from '../../../redux/features/app-slice';


interface TakePhotosViewProps {
    onContinue: () => void,
    addImageToForm: (value: string) => void,
    requiredAmount: number,
}

const TakePhotosView: React.FC<TakePhotosViewProps> = (props) => {
    const [photoNumber, setPhotoNumber] = useState<number>(0);
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const appColorScheme = useAppColorScheme();
    const dispatch = useAppDispatch();


    const verifyPermissions = async (): Promise<boolean> => {
        if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
            Alert.alert("Brak uprawnień do kamery", "Musisz przyznać uprawnienia aby skorzystać z rejestracji");
            //const permissionResponse = await requestPermission();
            //return permissionResponse.granted;
            return false;
        }

        return true;
    }

    const takePhotoHandler = async () => {
        const hasPermissionToCamera = await verifyPermissions();

        if (hasPermissionToCamera == false) {
            return;
        }

        dispatch(setIsLoading(true));

        const cameraOptions: ImagePickerOptions = {
            aspect: [2, 3],
            allowsEditing: false,
            quality: 0.5,
        }
        const image:any = await launchCameraAsync(cameraOptions);

        props.addImageToForm(image.uri)
        handleIncreasePhotoNumber();

        dispatch(setIsLoading(false));
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
            />
        </View>
    )
}

export default TakePhotosView;