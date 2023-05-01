import "react-native-gesture-handler";
import ReduxProvider from "./src/redux/ReduxProvider";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { registerRootComponent } from "expo";
import App from "./App";

function Main() {
  return (
    <ReduxProvider>
      <NativeBaseProvider>
        <App/>
      {/* <View>
          <Text>hello</Text>
        </View> */}
      </NativeBaseProvider>
    </ReduxProvider>
  );
}

registerRootComponent(Main);

// "main": "node_modules/expo/AppEntry.js",
