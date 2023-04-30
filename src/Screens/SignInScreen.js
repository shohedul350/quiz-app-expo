import React, { useState, useEffect, useLayoutEffect } from "react";
// import {useDispatch, useSelector} from 'react-redux'
import { useNavigation } from "@react-navigation/native";
import { View, ToastAndroid } from "react-native";
import {
  Box,
  Center,
  VStack,
  Heading,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Text,
} from "native-base";
import {
  useCurrentUserMutation,
  useLoginMutation,
} from "../redux/services/authServiceApi";
// import { setCredentials } from '../redux/features/userSlice'

const SignInScreen = () => {
  const navigation = useNavigation();
// const dispatch = useDispatch()
  const [email, setEmail] = React.useState("emon@gmail.com");
  const [password, setPassword] = React.useState("123456");


     useLayoutEffect(()=>{
     navigation.setOptions({
       headerShown: false
     })
      },[])
  const [login, { error, isLoading, isError, data, success, isSuccess }] =
    useLoginMutation();

  const [
    currentUser,
    {
      userError,
      userIsLoading,
      userIsError,
      userData,
      userSuccess,
      userIsSuccess,
    },
  ] = useCurrentUserMutation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = async () => {

    // navigation.navigate("Home");
    if (!email || !password) {
      return ToastAndroid.show("Fill All !", ToastAndroid.SHORT);
    }
    const body = { email, password };
    await login(body);
     ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT);
  };
  
  useEffect(() => {
    if (isError) {
      console.log(error);
      ToastAndroid.show(
        error?.data?.message || error.error.split(":")[1],
        ToastAndroid.SHORT
      );
    }

    if (isSuccess) {

      ToastAndroid.show(data.message, ToastAndroid.SHORT);
    // console.log({user: data?.user, token: data?.token});
      //  dispatch(setCredentials({user: data?.user, token: data?.token}))
      // currentUser();
      navigation.navigate("Home");
    }
  }, [error?.data?.message, error?.error, isError, isSuccess]);

  return (
    <Center w="100%"  mt="40">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          textAlign="center"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          textAlign="center"
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              placeholder="Enter valid Email"
              onChangeText={handleEmailChange}
              value={email}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder="Enter Password"
              onChangeText={handlePasswordChange}
              value={password}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>

          {isLoading ? (
            <Button mt="2" colorScheme="indigo" borderRadius={20}>
              Loading
            </Button>
          ) : (
            <Button mt="2" colorScheme="indigo" borderRadius={20} onPress={handleSubmit}>
              Sign in
            </Button>
          )}
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignInScreen;
