import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Foundation";
import ShoppingBag from "react-native-vector-icons/SimpleLineIcons";

import HomeScreen from "./HomeScreen/homeScreen";
import SearchScreen from "./SearchScreen/searchScreen";
import VideoScreen from "./VideoScreen/videoScreen";
import ShoppingScreen from "./ShoppingScreen/shoppingScreen";
import ProfileScreen from "./ProfileScreen/profileScreen";
import TabPost from "./ProfileScreen/TabPost";
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "home-sharp" : "home-outline";
            return (
              <Ionicons name={iconName} color={color} size={size}></Ionicons>
            );
          } else if (route.name === "SearchTab") {
            iconName = "search";
            return (
              <Ionicons name={iconName} color={color} size={size}></Ionicons>
            );
          } else if (route.name === "VideoTab") {
            iconName = "play-video";
            return <Icon name={iconName} color={color} size={size}></Icon>;
          } else if (route.name === "ShoppingTab") {
            iconName = "handbag";
            return (
              <ShoppingBag
                name={iconName}
                color={color}
                size={size}
              ></ShoppingBag>
            );
          } else if (route.name === "ProfileTab") {
            iconName = "person-circle-outline";
            return (
              <Ionicons name={iconName} color={color} size={size}></Ionicons>
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="SearchTab" component={SearchScreen} />
      <Tab.Screen name="VideoTab" component={VideoScreen} />
      <Tab.Screen name="ShoppingTab" component={ShoppingScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default MainScreen;
