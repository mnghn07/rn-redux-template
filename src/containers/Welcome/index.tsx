import React, { FunctionComponent } from "react";
import { View, Text, Pressable } from "react-native";
interface WelcomeProps {
  navigation: any;
}

const WelcomeScreen: FunctionComponent<WelcomeProps> = props => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <Text>WelcomeScreen</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text>To Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text>To Register</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Setting")}>
        <Text>To Setting</Text>
      </Pressable>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
