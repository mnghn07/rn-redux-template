import Header from "components/Header";
import React, { FunctionComponent } from "react";
import { View, Text, Pressable } from "react-native";
interface HomeProps {
  navigation: any;
  route: any;
}

const HomeScreen: FunctionComponent<HomeProps> = props => {
  const { navigation, route } = props;
  return (
    <View style={{ flex: 1 }}>
      <Text>HomeScreen</Text>
      {/* <Pressable onPress={() => navigation.navigate("PersonalTab")}>
        <Text>To Personal</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("ImpersonalStack")}>
        <Text>To Impersonal</Text>
      </Pressable> */}
      <Header
        type="main"
        shadowed
        headerLeftType="back"
        headerRightType="close"
        headerTitle="Drops"
        headerTitleAlign="center"
      />
    </View>
  );
};

export default HomeScreen;
