/**
 * @format
 */

import "react-native";
import React from "react";
import { Input, Icon, TabBar, Screen } from "components";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { Images } from "assets";

it("renders components correctly", () => {
  renderer.create(<Input />);
  renderer.create(<Icon icon={Images.basket.regular} />);
  renderer.create(<Screen />);
});
