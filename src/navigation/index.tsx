import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./RootNavigator";

const Root = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Root;
