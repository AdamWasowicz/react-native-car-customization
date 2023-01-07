import React from 'react';
import useAppStorage from '../useAppStorage';
import jwtDecode from 'jwt-decode';

interface appJWT_model  {
    exp: number,
    iat: number,
    sub: number
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

    const parseJwt = async (): Promise<appJWT_model> => {
        const token: string | null = await getJWT();

        if (token == null)
            throw new Error("JWT not pressent");
    
        const decoded = jwtDecode(token) as appJWT_model;
        return decoded
    }

    const checkIfTokenHasTime = async () => {
        if (await getTimeLeftOnToken() < 0)
            return false;

        return true;
    }

    const getTimeLeftOnToken = async (): Promise<number> => {
        const token = await parseJwt();
        const expireTime = new Date(token.exp * 1000);
        const now = new Date();

        // console.log('getTimeLeftOnToken()')
        // console.log('Now: ' + now.getTime())
        // console.log('Exp: ' + expireTime.getTime())

        return (expireTime.getTime() - now.getTime());
    }

    return {
        getJWT, parseJwt, checkIfTokenHasTime,
        getTimeLeftOnToken
    }
}

export default useJWT;