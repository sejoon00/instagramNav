import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import Scroll from "./Scroll";
import Icon from "react-native-vector-icons/Ionicons";
import IconPlus from "react-native-vector-icons/FontAwesome";
const Stack = createStackNavigator();

const Title = () => {
  return <Text sylte={{ textAlign: "center" }}>Instagram</Text>;
};

const styles = StyleSheet.create({
  icon: {
    padding: 9,
  },
});

const PostBoxHeader = styled.View`
  height: 50px;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 10px;
  background-color: white;
`;
const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Scroll"
        component={Scroll}
        options={{
          title: "Instagram",
          headerTitleAlign: "left",
          headerRight: () => (
            <PostBoxHeader>
              <IconPlus
                name="plus-square-o"
                size={25}
                style={styles.icon}
              ></IconPlus>
              <Icon name="heart-outline" size={25} style={styles.icon}></Icon>
              <Icon
                name="paper-plane-outline"
                size={25}
                style={styles.icon}
              ></Icon>
            </PostBoxHeader>
          ),
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeScreen;
