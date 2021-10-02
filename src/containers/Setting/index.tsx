import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface SettingProps {}

const SettingScreen: FunctionComponent<SettingProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;
