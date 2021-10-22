import React, { FunctionComponent } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  Animated,
} from "react-native";
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
  headerLeftStyle?: ViewStyle | ViewStyle[];
  onLeftPress?: () => void;

  // !override for right header button
  headerRightType?: string;
  headerRight?: React.ReactNode;
  headerRightStyle?: ViewStyle | ViewStyle[];
  onRightPress?: () => void;

  // !override for header title button
  headerTitle: string;
  headerTitleAlign: "left" | "center" | "right";
  headerTitleStyle?: ViewStyle | ViewStyle[];
  onTitlePress?: () => void;

  // !more configurations for headers
  extendedHeader?: React.ReactNode;
  shadowed?: boolean;
  transparent?: boolean;

  // !styles
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
    headerLeftStyle,
    headerRightStyle,
    headerTitleStyle,
    extendedHeader,
    shadowed,
    transparent,
    onLeftPress,
    onRightPress,
    onTitlePress,
  } = props;
  const navigation = useNavigation();
  const goBack = () => (navigation.canGoBack() ? navigation.goBack() : true);

  const transparentStyle: ViewStyle = { backgroundColor: Colors.transparent };
  const titleStyle: ViewStyle = {};
  return (
    <>
      <Animated.View
        style={[
          {
            flex: 1,
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
            paddingTop: Metrics.getStatusBarHeight(true),
          },
          shadowed && Colors.LIGHT_SHADOW,
          transparent && transparentStyle,
        ]}
      >
        {headerLeft || null}
        {headerLeftType === "back" && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={headerLeftStyle}
            onPress={onLeftPress}
            disabled={!onLeftPress}
          >
            <Icon icon={Images.chevron.left} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            headerTitleAlign === "left" && { flex: 1 },
            headerTitleAlign === "right" && { flex: 1, alignItems: "flex-end" },
            headerTitleAlign === "center" && { flex: 1, alignItems: "center" },
          ]}
          onPress={onTitlePress}
          disabled={!onTitlePress}
        >
          <Text style={headerTitleStyle} numberOfLines={1} ellipsizeMode="tail">
            {headerTitle}
          </Text>
        </TouchableOpacity>
        {headerRight || null}
        {headerRightType === "close" && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={headerRightStyle}
            onPress={onRightPress}
            disabled={!onRightPress}
          >
            <Icon icon={Images.close} />
          </TouchableOpacity>
        )}
      </Animated.View>
      {extendedHeader}
    </>
  );
};

export default Header;
