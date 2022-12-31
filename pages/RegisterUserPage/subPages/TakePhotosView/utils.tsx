import React from 'react';
import { TakePhotosViewProps } from './TakePhotosView';
import { Alert } from 'react-native';
import useDeviceCamera from '../../../../hooks/useDeviceCamera';
import { setIsLoading } from '../../../../redux/features/app-slice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { addPhoto } from '../../../../redux/features/registerForm-slice';


const useTakePhotosView = (props: TakePhotosViewProps) => {
    const dispatch = useAppDispatch();
    const camera = useDeviceCamera();

    const photoNumber = useAppSelector(state => state.registerForm.photos.length);
    const requiredAmount = useAppSelector(state => state.registerForm.amountOfPhotosRequired);


    const addPhotoHandler = (value: string) => {
        dispatch(addPhoto(value));
    }

    const takePhotoHandler = async () => {
        dispatch(setIsLoading(true));

        // Take photo
        try {
            const image = await camera.takePhotoAsBase64();
            addPhotoHandler(image);
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

    const getPhotoCounterText = (): string => {
        if (photoNumber < requiredAmount)
            return "Zdjęcie " + (photoNumber + 1) + " z " + requiredAmount;
        else
            return "Wszystkie zdjęcia zrobione";
    }


    return {
        photoNumber, requiredAmount,
        takePhotoHandler, getPhotoCounterText
    }
}

export default useTakePhotosView;