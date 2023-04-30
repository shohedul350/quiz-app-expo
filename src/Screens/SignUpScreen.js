import React, { useState, useEffect, useLayoutEffect} from "react";

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
import { useRegisterMutation } from "../redux/services/authServiceApi";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [register, { error, isLoading, isError, data, success, isSuccess }] =
    useRegisterMutation();

  const handleSubmit = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      return ToastAndroid.show("Fill All !", ToastAndroid.SHORT);
    }
    if (password != confirmPassword) {
      return ToastAndroid.show("Password not match", ToastAndroid.SHORT);
    }
    const body = { fullName, email, password};
    await register(body);
    ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT);
  };


  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
     },[])

  useEffect(() => {
    // testApi()
    if (isError) {
      ToastAndroid.show(
        error?.data?.message || error.error.split(":")[1],
        ToastAndroid.SHORT
      );
    }

    if (isSuccess) {
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
      navigation.navigate("SignIn");
      // currentUser();
    }
  }, [error?.data?.message, error?.error, isError, isSuccess]);

  return (
    <Center w="100%" mt="30">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          textAlign="center"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          textAlign="center"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              placeholder="Enter Name"
              onChangeText={(text) => setName(text)}
              value={fullName}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Enter Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder="Enter Confirm Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              placeholder="Enter Confirm Password"
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />
          </FormControl>
          {isLoading ? (
            <Button mt="2" colorScheme="indigo" borderRadius={20}>
              Loading
            </Button>
          ) : (
            <Button mt="2" colorScheme="indigo" onPress={handleSubmit} borderRadius={20}>
              Sign Up
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
              Already Have Account?{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUpScreen;
