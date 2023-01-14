import Loading from '@components/Loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { Text, View, StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <NativeBaseProvider>
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
