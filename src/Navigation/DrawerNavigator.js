
 

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen'
import CustomDrawer from '../Components/CustomDrawer'

const Drawer = createDrawerNavigator();

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    
    drawerContent={props => <CustomDrawer {...props} />}
    // screenOptions={{
    //   headerShown: false,
    //   drawerActiveBackgroundColor: "Blue",
    //   drawerActiveTintColor: "White",
    //   drawerLabelStyle: {
    //     marginLeft: -20,
    //   },
    // }}
    >
    

    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
  );
}

export default DrawerNavigator;