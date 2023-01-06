import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import useFaceRecognitionApi from '../../hooks/useFaceRecognitionApi';
import { Alert } from 'react-native';
import useDeviceCamera from '../../hooks/useDeviceCamera';
import { setIsLoading } from '../../redux/features/app-slice';
import { loginWithPhotoPayload, loginWithPhotoResponse } from '../../hooks/useFaceRecognitionApi/models';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import useAppStorage from '../../hooks/useAppStorage';
import { JWT } from '../../hooks/useAppStorage/constants';
import useAppNavigation from '../../hooks/useAppNavigation';


const useLoginWithPhotoPage = () => {
    const dispatch = useAppDispatch();
    const frApiClient = useFaceRecognitionApi();
    const camera = useDeviceCamera();
    const storage = useAppStorage();
    const navigation = useAppNavigation();

    const onClickHandler = async () => {
        dispatch(setIsLoading(true));
        let image: string;

        // Take photo
        try {
            image = await camera.takePhotoAsBase64();
        }
        catch (error) {
            console.log(error);

            Alert.alert("Błąd", "Nie udało się zrobić zdjęcia", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])

            dispatch(setIsLoading(false));
            return;
        }

        // Send request
        const data: loginWithPhotoPayload = { image: image! };
        let apiCallResponse: loginWithPhotoResponse;

        try {
            apiCallResponse = await frApiClient.loginWithPhoto(data);
        }
        catch (error) {
            console.log(error);

            Alert.alert("Błąd", "Nie udało się zalogować", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])

            dispatch(setIsLoading(false));
            return;
        }

        // Set JWT in storage
        try {
            await storage.insertKey(JWT, apiCallResponse!.auth_token)
            dispatch(setToken(apiCallResponse!.auth_token));
            dispatch(setIsAuthorized(true));

            Alert.alert("Sukces", "Udało się zalogować", [
                {
                    text: "Ok",
                    style: 'default'
                }
            ])

            navigation.moveToMainPage();
        }
        catch (error) {
            console.log(error);

            Alert.alert("Błąd", "Nie udało się zapisać danych", [
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

    return {
        onClickHandler,
    }
}

export default useLoginWithPhotoPage;