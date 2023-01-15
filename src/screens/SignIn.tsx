import BackgroundImg from '@assets/background.png';
import { VStack, Image } from 'native-base';

function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
    </VStack>
  );
}

export default SignIn;
