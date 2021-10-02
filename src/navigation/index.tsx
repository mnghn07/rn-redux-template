import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./RootNavigator";

// Root: MainBottomTab, PersonalTopTab, Im-PersonalStack
// |_ MainBottomTab: Home, Category, Wishlist, Cart, Newsfeed
// |_ PersonalTopTab: Order History, Setting
// |_ Im-PersonalStack: Setting, Login, Register

const Root = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Root;
