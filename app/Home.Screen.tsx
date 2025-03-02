import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  useAnimatedScrollHandler,
  Extrapolate,
} from "react-native-reanimated";
import { ProjectCard } from "@/components/pojectCard";
import { fontsLoaded } from "@/theme/typography";
import { CommonStyles } from "@/theme/common.styles";
import { projects } from "@/data/project";
import { windowHeight } from "@/theme/consts.styles";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { color } from "@/theme/colors";
import { Routes } from "@/router/routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationParamList } from "@/types/navigation.types";

export const HomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.home>
> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const scrollY = useSharedValue(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!fontsLoaded) return null;

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const createCardAnimation = useCallback(
    (index) => {
      return useAnimatedStyle(() => {
        const opacity = interpolate(
          scrollY.value,
          [index * 300 - 200, index * 300],
          [0, 1],
          Extrapolate.CLAMP
        );
        const translateX = interpolate(
          scrollY.value,
          [index * 300 - 200, index * 300],
          [index % 2 === 0 ? -width : width, 0],
          Extrapolate.CLAMP
        );
        const scale = interpolate(
          scrollY.value,
          [index * 300 - 200, index * 300],
          [0.8, 1],
          Extrapolate.CLAMP
        );
        return { opacity, transform: [{ translateX }, { scale }] };
      });
    },
    [scrollY, width]
  );

  return (
    <View style={styles.root}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        contentContainerStyle={styles.scroll}
        style={{ opacity: loading ? 0 : 1 }}
      >
        <Header />
        {projects.map((item, index) => {
          const animatedStyle = createCardAnimation(index);
          return (
            <Animated.View key={item.id} style={animatedStyle}>
              <ProjectCard
                onPress={() =>
                  navigation.navigate(Routes.project, { data: item })
                }
                {...item}
                style={[CommonStyles.rowReverse, styles.card]}
              />
            </Animated.View>
          );
        })}
        <Contact />
      </Animated.ScrollView>

      {loading && (
        <ActivityIndicator
          style={[CommonStyles.flexAlignJustifyCenter, StyleSheet.absoluteFill]}
          size="large"
          color={color.blue}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.background,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: windowHeight * 0.1,
    paddingBottom: 50,
  },

  card: {
    marginVertical: 20,
    shadowColor: color.blue,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
});
