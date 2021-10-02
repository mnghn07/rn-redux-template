import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface CartProps {}

const CartScreen: FunctionComponent<CartProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;
