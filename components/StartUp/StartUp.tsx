import React, { useEffect} from 'react';
import { AppStorageClient } from '../../hooks/useAppStorage/useAppStorage';
import useJWT from '../../hooks/useJWT';
import { useAppDispatch } from '../../redux/hooks';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';

interface StartUpProps {
    children: JSX.Element | JSX.Element[]
}

const StartUp: React.FC<StartUpProps> = (props) => {
    const jwt = useJWT();
    const dispatch = useAppDispatch();

    // Setup Db then
    // Check if JWT is in Db
    useEffect(() => {
      new AppStorageClient().initDb()
        .then(() => {
          jwt.getJWT()
            .then((response) => {
              if (response != null) {
                dispatch(setToken(response));
                dispatch(setIsAuthorized(true))
              }
            })
        })
    }, [])

    return (
        <>
            {props.children}
        </>
    )
}

export default StartUp;