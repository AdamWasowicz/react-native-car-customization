import React from 'react';
import useAppStorage from '../useAppStorage';

interface appJWT_model  {

}

const useJWT = () => {
    const storage = useAppStorage();

    const getJWT = async () : Promise<string | null> => {
        try {
            const response = await storage.getJWT();
            return response;
        }
        catch (error) {
            return Promise.reject(error);
        }
        
    }

    const parseJwt = async () => {
        const token: string | null = await getJWT();

        if (token == null)
            return null;

        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    return {
        getJWT, parseJwt
    }
}

export default useJWT;