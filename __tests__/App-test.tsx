/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";
import { render } from "@testing-library/react-native";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Rendering App correctly", () => {
  test("Rendering App", () => {
    render(<App />);
  });
});
