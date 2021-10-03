import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface CategoryProps {}

const CategoryScreen: FunctionComponent<CategoryProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>CategoryScreen</Text>
    </View>
  );
};

export default CategoryScreen;
