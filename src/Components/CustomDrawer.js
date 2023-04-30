import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  Pressable
} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import {useDispatch, useSelector} from 'react-redux'
import { selectCurrentAuth, logout,} from '../redux/features/userSlice'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Avatar, VStack, Center, NativeBaseProvider } from "native-base";


const {width} = Dimensions.get('screen');

const CustomDrawer = props => {

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { user } =  useSelector(selectCurrentAuth)


  return (
    <DrawerContentScrollView {...props}>
          <View style={{marginTop: 20}}>
          <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
        uri: "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png"
      }}>
        </Avatar>

        <View>
        <Text style={{textAlign:"center", fontWeight: "bold", margin: 10}}>{user?.fullName}</Text>
      </View>

          </View>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>

 
      
      <View>
      <Pressable
      onPress={
      () => {
        dispatch(logout())
        navigation.navigate("SignIn")
      }
      // currentUser()

      }
      >
        <Text style={{
          color:"white",
          fontWeight:"600",
          textAlign:"center",
          backgroundColor: "red",
          padding: 10,
          // width:120,
          display: "flex",
          flexWrap: "wrap",
          margin:8,
          borderRadius:5,

          alignContent: "center",

          }}>Logout</Text>
      </Pressable>
      </View>


    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: "white",
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});