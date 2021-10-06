import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  return <View style={{ flex: 1, width: "100%", height: 50 }}></View>;
};

export default Header;
