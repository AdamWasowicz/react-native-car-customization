import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Navigation from '../Navigation';
import React, { useState, useEffect } from 'react';
import useFontsHook from '../../hooks/useFonts';
import AppLoading from 'expo-app-loading';
import LoadingCover from '../UI/LoadingCover';
import { AppStorageClient } from '../../utils/useAppStorage/useAppStorage';

export default function App() {
    const [isAppReady, setIsAppReady] = useState<boolean>(false);
    useEffect(() => {
      new AppStorageClient().initDb();
    }, [])

    const LoadFonts = async () => {
      await useFontsHook();
    }

    if (isAppReady == false) {
      return (
        <AppLoading
          startAsync={LoadFonts}
          onFinish={() => setIsAppReady(true)}
          onError={() => {}}
        />
      )
    }


    return (
      <SafeAreaProvider style={{flex: 1}}>
          <Provider store={store}>
            <LoadingCover/>
            <Navigation/>
          </Provider>
      </SafeAreaProvider>
    );
}
