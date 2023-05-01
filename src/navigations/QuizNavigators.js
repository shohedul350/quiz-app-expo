import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Quiz, QuizResult} from '../Screens';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      initialRouteName={ROUTES.HOME}>
         <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.QUIZ} component={Quiz} />
      <Stack.Screen name={ROUTES.QUIZ_RESULT} component={QuizResult} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;