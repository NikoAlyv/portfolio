import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationParamList } from "@/types/navigation.types";
import { Routes } from "@/router/routes";
import { color } from "@/theme/colors";
import { Button } from "@/components/Button";
import { isWeb, windowHeight, windowWidth } from "@/theme/consts.styles";
import { TypographyStyles } from "@/theme/typography";
import { CommonStyles } from "@/theme/common.styles";
import { Feather } from "@expo/vector-icons";
import { normalize } from "@/theme/metrics";

export const ProjectScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.project>
> = ({ route, navigation }) => {
  const { description, image, title, link } = route.params.data;

  const handlePress = () => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.root}
      contentContainerStyle={CommonStyles.alignJustifyCenter}
    >
      <Feather
        onPress={() => navigation.navigate(Routes.home)}
        name="arrow-left-circle"
        color={color.white}
        size={30}
        style={styles.icon}
      />
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
        {link && (
          <Button
            title="Visit Project"
            onPress={handlePress}
            textStyle={TypographyStyles.poppins24}
            style={CommonStyles.alginSelfCenter}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: color.background,
    paddingBottom: 10,
  },

  image: {
    width: isWeb ? windowWidth / 2 : windowHeight / 2,
    height: isWeb ? windowHeight / 2 : windowHeight / 2,
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    alignSelf: "flex-start",
    padding: 20,
  },
  content: {
    flex: 1,
    width: windowWidth / 2,
    gap: 20,
  },
  title: {
    ...TypographyStyles.playFair24,
    marginBottom: 10,
  },
  description: {
    ...TypographyStyles.montserrat18,
    ...CommonStyles.textAlignCenter,
    lineHeight: 24,
  },
});
