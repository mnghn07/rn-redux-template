/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";
import { render, waitFor } from "@testing-library/react-native";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Rendering App correctly", () => {
  test("Rendering App", async () => {
    const { getByText } = render(<App />);
    await waitFor(() => getByText("Home"));
  });
});
