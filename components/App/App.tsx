import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView,  } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Navigation from '../Navigation';
import React, {useState} from 'react';
import useFontsHook from '../../hooks/useFonts';
import { View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';

export default function App() {

    const [isAppReady, setIsAppReady] = useState<boolean>(false);

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
            <Navigation/>
          </Provider>
      </SafeAreaProvider>
    );
}
