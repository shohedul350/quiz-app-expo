import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './src/navigations/authNavigator';
import DrawerNavigator from './src/navigations/DrawerNavigator'
// import AuthNavigator from './src/navigations/AuthNavigator'
// import SignInScreen from './src/Screens/SignInScreen';
// import SignUpScreen from './src/Screens/SignUpScreen';
// import QuizScreen from './src/Screens/QuizScreen'

// import DrawerNavigator from './src/navigations/DrawerNavigator'
import { useSelector} from 'react-redux'
import { selectCurrentAuth} from './src/redux/features/userSlice'



export default function App() {
  const { user } =  useSelector(selectCurrentAuth)
  return (
       <NavigationContainer>


        {user ?   <DrawerNavigator/> : <AuthNavigator/>  }
     
      </NavigationContainer> 

  );
}
