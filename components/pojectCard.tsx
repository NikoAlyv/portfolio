import {
  Image,
  ImageProps,
  Linking,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { TypographyStyles } from "@/theme/typography";
import { CommonStyles } from "@/theme/common.styles";
import { normalize } from "@/theme/metrics";
import { isWeb, windowHeight, windowWidth } from "@/theme/consts.styles";
export interface ICard {
  id?: number;
  title?: string;
  description?: string;
  image?: ImageProps | any;
  link?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const ProjectCard: React.FC<ICard> = ({
  title,
  image,
  onPress,
  style,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, style]}>
      <Image style={[styles.image]} source={image} />
      <View style={styles.container}>
        <Text style={TypographyStyles.montserrat24}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: normalize("vertical", 50),
    ...CommonStyles.alignCenterJustifyBetweenRow,
  },
  image: {
    width: isWeb ? windowWidth / 3 : windowHeight / 3,
    height: isWeb ? windowHeight / 3 : windowWidth / 3,
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: normalize("horizontal", 100),
    gap: 10,
    paddingVertical: normalize("vertical", 50),
    ...CommonStyles.alignJustifyCenter,
  },
});
