import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useFaceRecognitionApi from '../../hooks/useFaceRecognitionApi';
import { setAllSettigns } from '../../redux/features/carSettings-slice';


const useHomePage = () => {
    const dispatch = useAppDispatch();
    const isAuthorized = useAppSelector(state => state.auth.token);
    const frApiClient = useFaceRecognitionApi();

    useEffect(() => {
        frApiClient.getSettings()
            .then((response) => {
                dispatch(setAllSettigns(response.data));
            })
            .catch((error) => {
                console.log(error)
            })
    }, [isAuthorized])

    return {

    }
}

export default useHomePage;