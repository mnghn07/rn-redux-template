import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";

interface ProfileProps {}

const ProfileScreen: FunctionComponent<ProfileProps> = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
