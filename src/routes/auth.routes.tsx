import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';

type AuthRoutesType = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRouteProps = NativeStackNavigationProp<AuthRoutesType>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesType>();

function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}

export default AuthRoutes;
