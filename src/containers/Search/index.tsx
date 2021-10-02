import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface SearchProps {}

const SearchScreen: FunctionComponent<SearchProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
