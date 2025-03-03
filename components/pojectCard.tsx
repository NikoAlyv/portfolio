import {
  Image,
  ImageProps,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { TypographyStyles } from "@/theme/typography";
import { CommonStyles } from "@/theme/common.styles";
import { normalize } from "@/theme/metrics";

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
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768; // Mobil cihazlar üçün hədd

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.root,
        { flexDirection: isSmallScreen ? 'column-reverse' : "row" },
        style,
      ]}
    >
      <Text style={[TypographyStyles.montserrat24, styles.text]}>
        {title}
      </Text>
      <Image style={styles.image} source={image} />

    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    marginVertical: normalize("vertical", 50),
    ...CommonStyles.alignCenterJustifyBetweenRow,
  },
  image: {
    flex:1/3,
    width: "100%",
    maxWidth: 500,
    height: 250,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    marginTop: 10, 
    padding:80,


    
  },
});
