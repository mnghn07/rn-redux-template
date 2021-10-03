import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface ProductsProps {}

const ProductsScreen: FunctionComponent<ProductsProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>ProductsScreen</Text>
    </View>
  );
};

export default ProductsScreen;
