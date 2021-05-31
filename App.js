import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./components/MainScreen";

export default function App() {
  return (
    <NavigationContainer>
      <MainScreen></MainScreen>
    </NavigationContainer>
  );
}
