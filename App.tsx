import Loading from '@components/Loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { Text, StatusBar } from 'react-native';

import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Text>Open up App.js to start working on your app!</Text>
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
}
