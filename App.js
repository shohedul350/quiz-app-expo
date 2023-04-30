import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReduxProvider from './src/redux/ReduxProvider';
import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import HomeScreen from './src/Screens/HomeScreen';
import QuizScreen from './src/Screens/QuizScreen'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ReduxProvider>
    <NativeBaseProvider>
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
      </NavigationContainer> 
    </NativeBaseProvider>
    </ReduxProvider>
  );
}
