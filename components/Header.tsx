import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TypographyStyles } from "@/theme/typography";
import { color } from "@/theme/colors";
import { CommonStyles } from "@/theme/common.styles";
import { windowHeight } from "@/theme/consts.styles";

export const Header = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={require("../assets/images/me.png")} />
      <Text style={TypographyStyles.fireCode24}>Nihad Aliyev</Text>
      <Text style={TypographyStyles.fireCode26}>Mobile Developer</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    ...CommonStyles.alignJustifyCenter,
    gap: 5,
    marginBottom: 30,
  },
  image: {
    borderWidth: 2,
    borderColor: color.blue,
    width: windowHeight / 3,
    margin: 10,
    height: windowHeight / 3,
    borderRadius: 160,
  },
});
