import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { OrdersScreen, SettingScreen } from "containers";

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const PersonalTopTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Personal" component={PersonalTopTab} />
    </Stack.Navigator>
  );
};

const PersonalTopTab = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Orders" component={OrdersScreen} />
      <TopTab.Screen name="Setting" component={SettingScreen} />
    </TopTab.Navigator>
  );
};

export default PersonalTopTabNavigator;
