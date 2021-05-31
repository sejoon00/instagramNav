import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "./profile";

const Tab = createMaterialTopTabNavigator();

const MyPost = () => {
  return <Text>My</Text>;
};

const TagPost = () => {
  return <Text>Tag</Text>;
};
function TabPost() {
  return (
    <Tab.Navigator tabBar={(props) => <Profile {...props}></Profile>}>
      <Tab.Screen name="MyPost" component={MyPost}></Tab.Screen>
      <Tab.Screen name="TagPost" component={TagPost}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default TabPost;
