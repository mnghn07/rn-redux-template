import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface ProductDetailProps {}

const ProductDetailScreen: FunctionComponent<ProductDetailProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>ProductDetailScreen</Text>
    </View>
  );
};

export default ProductDetailScreen;
