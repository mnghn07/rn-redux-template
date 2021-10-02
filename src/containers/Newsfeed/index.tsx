import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
interface NewsfeedProps {}

const NewsfeedScreen: FunctionComponent<NewsfeedProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>NewsfeedScreen</Text>
    </View>
  );
};

export default NewsfeedScreen;
