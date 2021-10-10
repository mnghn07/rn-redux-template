import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Icon } from "components";
import { Colors, Images, Metrics } from "themes";
import { getStatusBarHeight } from "themes/metrics";

interface HeaderProps {
  // !divided to 3 types for 3 main stacks
  type: "main" | "personal" | "impersonal";

  // !override for left header button
  headerLeftType?: string;
  headerLeft?: React.ReactNode;
  onLeftPress?: () => void;

  // !override for right header button
  headerRightType?: string;
  headerRight?: React.ReactNode;
  onRightPress?: () => void;

  // !override for header title button
  headerTitle: string;
  headerTitleAlign: "left" | "center" | "right";
  headerTitleStyle?: ViewStyle | ViewStyle[];
  onTitlePress?: () => void;

  // !more configurations for headers
  extendedBar?: React.ReactNode;
  shadowed?: boolean;
  transparent?: boolean;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const {
    type,
    headerLeft,
    headerRight,
    headerTitle,
    headerLeftType,
    headerRightType,
    headerTitleAlign,
    headerTitleStyle,
    extendedBar,
    shadowed,
    transparent,
    onLeftPress,
    onRightPress,
    onTitlePress,
  } = props;
  const navigation = useNavigation();
  const goBack = () => (navigation.canGoBack() ? navigation.goBack() : true);
  return (
    <View
      style={{
        width: "100%",
        height: Metrics.HEADER_HEIGHT,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.warning,
        paddingTop: getStatusBarHeight(),
      }}
    >
      {headerLeft || null}
      {headerLeftType === "back" && (
        <TouchableOpacity onPress={onLeftPress} disabled={!onLeftPress}>
          <Icon icon={Images.chevron.left} />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[
          headerTitleAlign === "left" && { flex: 1 },
          headerTitleAlign === "right" && { alignItems: "flex-end" },
          headerTitleAlign === "center" && { flex: 1, alignItems: "center" },
        ]}
        onPress={onTitlePress}
        disabled={!onTitlePress}
      >
        <Text style={headerTitleStyle}>{headerTitle}</Text>
      </TouchableOpacity>
      {headerRight || null}
    </View>
  );
};

export default Header;
