/**
 * @format
 */

import "react-native";
import React from "react";
import {
  CartScreen,
  CategoryScreen,
  HomeScreen,
  MenuScreen,
  NewsfeedScreen,
  OrdersScreen,
  ProductDetailScreen,
  ProductsScreen,
  ProfileScreen,
  SearchScreen,
  SettingScreen,
} from "containers";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<CartScreen />);
  renderer.create(<CategoryScreen />);
});
