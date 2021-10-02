import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface WishlistProps {}

const WishlistScreen: FunctionComponent<WishlistProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>WishlistScreen</Text>
    </View>
  );
};

export default WishlistScreen;
