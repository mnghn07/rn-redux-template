import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  ProfileScreen,
  NewsfeedScreen,
  CartScreen,
  CategoryScreen,
} from "containers";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Newsfeed" component={NewsfeedScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
