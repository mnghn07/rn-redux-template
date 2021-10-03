import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface OrdersProps {}

const OrdersScreen: FunctionComponent<OrdersProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>OrdersScreen</Text>
    </View>
  );
};

export default OrdersScreen;
