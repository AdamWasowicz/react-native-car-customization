import React from 'react';
import { launchCameraAsync, ImagePickerOptions, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Alert } from 'react-native';


const useDeviceCamera = () => {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    const verifyPermissions = async (): Promise<boolean> => {
        if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
            Alert.alert("Brak uprawnień do kamery", "Musisz przyznać uprawnienia aby skorzystać z rejestracji");
            return false;
        }

        return true;
    }

    const takePhotoAsBase64 = async (): Promise<string> => {
        const hasPermissionToCamera = await verifyPermissions();

        if (hasPermissionToCamera == false) {
            return Promise.reject();;
        }

        const cameraOptions: ImagePickerOptions = {
            allowsEditing: true,
            quality: 0.1,
            base64: true,
        }
        const image: any = await launchCameraAsync(cameraOptions);

        if (image.cancelled == true) {
            throw new Error('Camera error')
        }
        else {
            return image.base64; 
        }
    }

    return {
        takePhotoAsBase64, 
    }
}

export default useDeviceCamera;