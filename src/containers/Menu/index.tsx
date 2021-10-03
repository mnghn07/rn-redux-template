import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface MenuProps {}

const MenuScreen: FunctionComponent<MenuProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>MenuScreen</Text>
    </View>
  );
};

export default MenuScreen;
