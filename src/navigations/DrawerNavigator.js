
 

// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from '../Screens/HomeScreen'
// import CustomDrawer from '../Components/CustomDrawer'

// const Drawer = createDrawerNavigator();

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator 
    
//     drawerContent={props => <CustomDrawer {...props} />}
//     >
    

//     <Drawer.Screen name="Home" component={HomeScreen} />
//     <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//   </Drawer.Navigator>
//   );
// }

// export default DrawerNavigator;

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, ROUTES} from '../constants';
import {Wallet, Notifications} from '../Screens';
import BottomTabNavigator from './BottomTabNavgator';
import Icon from 'react-native-vector-icons/Ionicons';
// import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
        options={{
          title: 'Wallet',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="wallet" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
