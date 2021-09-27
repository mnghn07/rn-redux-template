import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface HomeProps {}

const HomeScreen: FunctionComponent<HomeProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
