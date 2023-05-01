import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AuthNavigator from './src/navigations/authNavigator';
// import AuthNavigator from './src/navigations/AuthNavigator'
// import SignInScreen from './src/Screens/SignInScreen';
// import SignUpScreen from './src/Screens/SignUpScreen';
// import QuizScreen from './src/Screens/QuizScreen'

// import DrawerNavigator from './src/navigations/DrawerNavigator'
import { useSelector} from 'react-redux'
import { selectCurrentAuth} from './src/redux/features/userSlice'



export default function App() {
  const Stack = createNativeStackNavigator();
  const { user } =  useSelector(selectCurrentAuth)
  return (
       <NavigationContainer>
        <View>
          <Text>hello</Text>
        </View>

        {/* <AuthNavigator/> */}
      {/* <Stack.Navigator 
      initialRouteName={user ? "Home" : "SignIn"}
      >
        <Stack.Screen name="SignIn" 
        component={SignInScreen} 
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator}
             options={({route}) => ({
              headerShown: false,
              headerBackTitleVisible: true,
        })}

         />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator> */}
      </NavigationContainer> 

  );
}
