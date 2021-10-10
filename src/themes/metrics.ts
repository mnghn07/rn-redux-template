import {
  getStatusBarHeight,
  isIPhone12,
  isIPhone12Max,
  isIPhoneWithMonobrow,
  isIPhoneX,
  isIPhoneXMax,
} from "react-native-status-bar-height";

// paddings, margins
const Spacings = {
  normal: 16,
  size8: 8,
  size4: 4,
  size24: 24,
  size32: 32,
  size64: 64,
  size128: 128,
  custom: (n: number) => n,
};

// width, height, radius,
const Sizes = {
  bigTitle: 36,
  title: 26,
  normal: 18,
  product: 16,
  text: 14,
  button: 13,
  category: 13,
  smallerText: 12,
  custom: (n: number) => n,
};

// others
const Metrics = {
  buttonOpacity: 0.7,
  opacity: 0.5,
  custom: (n: number) => n,
};

console.log("metrics", Metrics);

export {
  Spacings,
  Sizes,
  Metrics,
  getStatusBarHeight,
  isIPhone12,
  isIPhone12Max,
  isIPhoneWithMonobrow,
  isIPhoneX,
  isIPhoneXMax,
};