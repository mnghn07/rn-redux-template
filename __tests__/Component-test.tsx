/**
 * @format
 */

import "react-native";
import React from "react";
import { Input } from "components";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders components correctly", () => {
  renderer.create(<Input />);
});
