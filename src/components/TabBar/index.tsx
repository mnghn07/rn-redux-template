import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Icon } from "components";
import { Images, Metrics, Colors } from "themes";
import { Spacings } from "themes/metrics";

const TabBar = (props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: Metrics.TABBAR_HEIGHT,
        backgroundColor: Colors.background,
        ...Colors.LIGHT_SHADOW,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true, params: {} });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const selectedStyle = { opacity: 1, transform: [{ scale: 1.2 }] };

        return (
          <TouchableOpacity
            key={route.name + route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: Spacings.normal,
            }}
            activeOpacity={0.7}
          >
            {route.name === "Home" && (
              <Icon
                icon={Images.fire}
                selected={isFocused}
                selectedStyle={selectedStyle}
              />
            )}
            {route.name === "Category" && (
              <Icon
                icon={Images.search}
                selected={isFocused}
                selectedStyle={selectedStyle}
              />
            )}
            {route.name === "Wishlist" && (
              <Icon
                icon={Images.cart.heart}
                selected={isFocused}
                selectedStyle={selectedStyle}
              />
            )}
            {route.name === "Cart" && (
              <Icon
                icon={Images.cart.regular}
                selected={isFocused}
                selectedStyle={selectedStyle}
              />
            )}
            {route.name === "Newsfeed" && (
              <Icon
                icon={Images.shoes}
                selected={isFocused}
                selectedStyle={selectedStyle}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
