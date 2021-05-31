import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./profile";
import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components";
import IconPlus from "react-native-vector-icons/FontAwesome";
import TabPost from "./TabPost";

const Stack = createStackNavigator();

const PostBoxHeader = styled.View`
  height: 50px;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 10px;
  background-color: white;
`;

const styles = StyleSheet.create({
  icon: {
    padding: 9,
  },
});

const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Sejoon",
          headerTitleAlign: "left",
          headerRight: () => (
            <PostBoxHeader>
              <IconPlus
                name="plus-square-o"
                size={25}
                style={styles.icon}
              ></IconPlus>
              <Icon
                name="reorder-three-outline"
                size={40}
                style={styles.icon}
              ></Icon>
            </PostBoxHeader>
          ),
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileScreen;
