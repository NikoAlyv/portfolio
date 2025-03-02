import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Routes } from "./routes";
import { ProjectScreen } from "@/app/Project.Screen";
import { HomeScreen } from "@/app/Home.Screen";
import { NavigationParamList } from "@/types/navigation.types";

const Stack = createNativeStackNavigator<NavigationParamList>();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_left" }}
      initialRouteName={Routes.home}
    >
      <Stack.Screen name={Routes.home} component={HomeScreen} />
      <Stack.Screen name={Routes.project} component={ProjectScreen} />
    </Stack.Navigator>
  );
};

export default Router;
