import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface RegisterProps {}

const RegisterScreen: FunctionComponent<RegisterProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
