import React, { useEffect } from 'react';
import useAppStorage, { AppStorageClient } from '../../hooks/useAppStorage/useAppStorage';
import useJWT from '../../hooks/useJWT';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsAuthorized, setToken } from '../../redux/features/auth-slice';
import { JWT } from '../../hooks/useAppStorage/constants';

interface StartUpProps {
  children: JSX.Element | JSX.Element[]
}

const StartUp: React.FC<StartUpProps> = (props) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.auth.token);
  const jwt = useJWT();
  const storage = useAppStorage();
  let tokenExpirySubscription = setTimeout(() => { }, 0)

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

  // Check if we have token
  // Check if its expired else setup auto logout
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



  return (
    <>
      {props.children}
    </>
  )
}

export default StartUp;