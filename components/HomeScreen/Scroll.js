import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Main from "./main";
import Main2 from "./main2";

const Scroll = () => {
  return (
    <View>
      <ScrollView>
        <Main></Main>
        <Main2></Main2>
        <Main></Main>
        <Main2></Main2>
        <Main></Main>
        <Main2></Main2>
      </ScrollView>
    </View>
  );
};

export default Scroll;
