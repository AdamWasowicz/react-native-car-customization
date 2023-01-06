import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Navigation from '../Navigation';
import React, { useState } from 'react';
import useFonts from '../../hooks/useFonts/useFonts';
import AppLoading from 'expo-app-loading';
import LoadingCover from '../UI/LoadingCover';
import StartUp from '../StartUp';

export default function App() {
    const [isAppReady, setIsAppReady] = useState<boolean>(false);

    const LoadFonts = async () => {
      await useFonts();
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
            <StartUp>
              <LoadingCover/>
              <Navigation/>
            </StartUp>
          </Provider>
      </SafeAreaProvider>
    );
}
