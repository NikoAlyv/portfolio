import {
  Text,
  TextStyle,
  ViewStyle,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { StyleProp } from "react-native";
import { CommonStyles } from "@/theme/common.styles";
import { color } from "@/theme/colors";
import { windowWidth } from "@/theme/consts.styles";
import { normalize } from "@/theme/metrics";
import { TypographyStyles } from "@/theme/typography";

interface IButton {
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<IButton> = ({
  title,
  style,
  textStyle,
  onPress,
  disabled,
  loading,
}) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const onPressIn = () => setPressed(true);
  const onPressOut = () => setPressed(false);
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={disabled ? undefined : onPress}
      style={[styles.button, pressed ? styles.pressedButton : undefined, style]}
    >
      {loading ? (
        <ActivityIndicator color={color.white} />
      ) : (
        <Text style={[TypographyStyles.playFair24, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: color.blue,
    width: windowWidth / 3,
    paddingVertical: normalize("vertical", 12),
    paddingHorizontal: normalize("horizontal", 24),
    borderRadius: 8,
    alignItems: "center",
  },
  pressedButton: {
    backgroundColor: color.white,
  },
});
