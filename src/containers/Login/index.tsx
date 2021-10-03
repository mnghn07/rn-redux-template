import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface LoginProps {}

const LoginScreen: FunctionComponent<LoginProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
