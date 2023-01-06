import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    'space-mono': require('../../assets/fonts/SpaceMono/SpaceMono-Regular.ttf'),
    'Roboto-Bold': require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Lato-Bold': require('../../assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../../assets/fonts/Lato/Lato-Regular.ttf'),
  });

export default useFonts;