import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useFaceRecognitionApi from '../../hooks/useFaceRecognitionApi';
import { setAllSettigns } from '../../redux/features/carSettings-slice';
import useJWT from '../../hooks/useJWT';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import useAppStorage from '../../hooks/useAppStorage';
import { JWT } from '../../hooks/useAppStorage/constants';


const useHomePage = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.auth.token);
    const frApiClient = useFaceRecognitionApi();
    const jwt = useJWT();
    const storage = useAppStorage();
    let tokenExpirySubscription = setTimeout(() => {}, 0)


    useEffect(() => {
        if (token == "")
            return;

        frApiClient.getSettings()
            .then((response) => {
                dispatch(setAllSettigns(response.data));
            })
            .catch((error) => {
                console.log(error)
            })
    }, [token])

    useEffect(() => {
        if (token == "")
            return;

        jwt.checkIfTokenHasTime()
            .then(async (response) => {
                const timeLeft = await jwt.getTimeLeftOnToken();

                if (response == false) {
                    await dispatch(setIsAuthorized(false))
                    await storage.deleteKey(JWT)
                    await dispatch(setToken(""));
                }
                else {
                    clearTimeout(tokenExpirySubscription);
                    tokenExpirySubscription = setTimeout(async () => {
                        await dispatch(setIsAuthorized(false))
                        await storage.deleteKey(JWT)
                        await dispatch(setToken(""));
                    }, timeLeft)
                }
            })
            .catch((error) => {
                console.log(error);
            })

        return () => clearTimeout(tokenExpirySubscription)
    }, [token])

    return {

    }
}

export default useHomePage;