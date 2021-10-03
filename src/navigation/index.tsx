import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import PersonalTopTabNavigator from "./PersonalTopTabNavigator";
import ImpersonalStackNavigator from "./ImpersonalStackNavigator";

import { navigationRef } from "./RootNavigation";

const Stack = createNativeStackNavigator();

// Root: MainBottomTab, PersonalTopTab, Im-PersonalStack
// |_ MainBottomTab: Home, Category, Wishlist, Cart, Newsfeed
// |_ PersonalTopTab: Order History, Setting
// |_ Im-PersonalStack: Setting, Login, Register, Welcome

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen
            name="PersonalTab"
            component={PersonalTopTabNavigator}
          />
          <Stack.Screen
            name="ImpersonalStack"
            component={ImpersonalStackNavigator}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
