import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from '@expo/vector-icons'; 
import {useDispatch, useSelector} from 'react-redux'
import { selectCurrentAuth, logout, currentUser} from '../redux/features/userSlice'
import {
  useCurrentUserMutation,
} from "../redux/services/authServiceApi";

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const { user } =  useSelector(selectCurrentAuth)
    
    // const [
    //   currentUser,
    //   {
    //     error, isLoading, isError, data, success, isSuccess
    //   },
    // ] = useCurrentUserMutation();

    // useEffect(()=>{
    //   currentUser()
    // },[])

  return (
    <View >

   <Pressable
      onPress={
      () => 
      // currentUser()
      dispatch(logout())
      }
        style={{
          backgroundColor: "#2364EB",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Logout</Text>
      </Pressable>


      <Text
          style={{
            textAlign: "center",
            fontWeight:"bold",
           color:"#2364EB",
            fontSize: 16,
            fontWeight: "600",
            margin: 5
          }}
        >
         Welcome {user?.fullName}
        </Text>

      <Image
        style={{ height: 300, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://www.fellowone.com/wp-content/uploads/2020/09/FOO-Free-Body-Type-Shape-Quiz-Calculator-FOO.png",
        }}
      />

      <View style={{ padding: 2 }}>
    

        <View
          style={{
            padding: 10,
            // backgroundColor: "#2364EB",
            borderRadius: 6,
            marginTop: 15,
          }}
        >

<Text
          style={{
            textAlign: "center",
            fontWeight:"bold",
           color:"#2364EB",
            fontSize: 20,
            fontWeight: "600",
            margin: 10
          }}
        >
          QUIZ RULES
        </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
          <Text>
            <Octicons name="tasklist" size={24} color="#2364EB" />

            </Text>
            <Text
              style={{
                marginLeft: 4,
               color:"#2364EB",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              For each correct answer you get 5 points
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
  <Text>
            <Octicons name="tasklist" size={24} color="#2364EB" />

            </Text>
            <Text
              style={{
                marginLeft: 4,
               color:"#2364EB",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              There is no negative marking for wrong answer
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
             <Text>
            <Octicons name="tasklist" size={24} color="#2364EB" />

            </Text>
            <Text
              style={{
                marginLeft: 4,
               color:"#2364EB",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Each question has a time limit of 15 sec
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text>
            <Octicons name="tasklist" size={24} color="#2364EB" />

            </Text>
            <Text
              style={{
                marginLeft: 4,
               color:"#2364EB",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              You should answer all the questions compulsarily
            </Text>
          </View>
        </View>
      </View>

      <Pressable
      onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor: "#2364EB",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Start Quiz</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});