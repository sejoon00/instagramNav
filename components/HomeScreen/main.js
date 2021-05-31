import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Ionicons";
import IconHeart from "react-native-vector-icons/AntDesign";

const PostBox = styled.ScrollView``;

const PostBoxHeader = styled.View`
  height: 50px;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 10px;
  background-color: white;
`;

const styles = StyleSheet.create({
  personIcon: {
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  iconBookMark: {
    position: "absolute",
    right: 10,
  },
});

const PostBoxHeart = styled.View`
  height: 40px;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 10px;
  background-color: white;
`;
const PostBoxPhoto = styled.View`
  height: 280px;
  background-color: gray;
`;
const PostBoxWrite = styled.Text`
  display: flex;
  background-color: white;
  padding: 10px;
  font-size: 15px;
`;
function Main() {
  return (
    <PostBox>
      <PostBoxHeader>
        <Icon
          name="person-circle-outline"
          size={30}
          style={styles.personIcon}
        ></Icon>
        <Text>Name</Text>
      </PostBoxHeader>
      <PostBoxPhoto></PostBoxPhoto>
      <PostBoxHeart>
        <IconHeart name="hearto" size={25} style={styles.icon}></IconHeart>
        <Icon name="chatbubble-outline" size={25} style={styles.icon}></Icon>
        <Icon name="paper-plane-outline" size={25} style={styles.icon}></Icon>
        <Icon
          name="bookmark-outline"
          size={25}
          style={styles.iconBookMark}
        ></Icon>
      </PostBoxHeart>
      <PostBoxWrite>
        Hello, this is PostBox
        {"\n"}
        Okay, let's start
      </PostBoxWrite>
    </PostBox>
  );
}

export default Main;
