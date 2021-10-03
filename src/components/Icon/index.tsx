import React, { FunctionComponent } from "react";
import { Image, ImageBackground, ImageSourcePropType } from "react-native";

interface IconProps {
  icon: ImageSourcePropType;
  style?: any;
  containerStyle?: any;
  size?: "extraSmall" | "small" | "normal" | "large";
  selected?: boolean;
  selectedStyle?: any;
}

const Icon: FunctionComponent<IconProps> = props => {
  const {
    icon,
    children,
    style,
    containerStyle,
    size,
    selected,
    selectedStyle,
  } = props;

  // default icon size
  let iconSize = 24;
  switch (size) {
    case "extraSmall":
      iconSize = 4;
      break;
    case "small":
      iconSize = 8;
      break;
    case "large":
      iconSize = 48;
      break;
    case "normal":
    default:
      iconSize = 24;
      break;
  }

  const imageStyles = {
    width: 24,
    height: 24,
    iconSize,
    justifyContent: "center",
    alignItems: "center",
    ...style,
  };

  if (children) {
    return (
      <ImageBackground
        // @ts-ignore
        source={icon}
        imageStyle={[imageStyles, selected ? selectedStyle : { opacity: 0.5 }]}
        style={containerStyle}
        resizeMode="contain"
      >
        {children}
      </ImageBackground>
    );
  }
  return (
    // @ts-ignore
    <Image
      source={icon}
      style={[imageStyles, selected ? selectedStyle : { opacity: 0.5 }]}
      resizeMode="contain"
    />
  );
};

export default Icon;
