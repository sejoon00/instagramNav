import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import styled from "styled-components";
import IconPlus from "react-native-vector-icons/Feather";
import TabPost from "./TabPost";

import TableIcon from "react-native-vector-icons/AntDesign";
import TagIcon from "react-native-vector-icons/FontAwesome5";
import { render } from "react-dom";

const Background = styled.View`
  background-color: white;
  height: 100%;
`;
const Circle = styled.View`
  background-color: black;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
const InfoBox = styled.View`
  display: flex;
  flex-flow: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;
const InfoBtn = styled.Text`
  text-align: center;
`;
const StoryBox = styled.View`
  display: flex;
  flex-flow: row;
  padding: 20px;
  align-items: center;
`;
const Story = styled.View``;
const styles = StyleSheet.create({
  circle: {
    backgroundColor: "black",
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  storyBorder: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 0.9,
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  storyContent: {
    backgroundColor: "black",
    width: 63,
    height: 63,
    borderRadius: 33,
  },
  postBox: {
    width: 130,
    height: 130,
    backgroundColor: "skyblue",
    marginRight: 1,
  },
  postBox2: {
    width: 130,
    height: 130,
    backgroundColor: "pink",
    marginRight: 1,
  },
  postbtn: {
    padding: 10,
  },
});
const { width, height } = Dimensions.get("window");
const StoryContent = styled.View``;

const Profile = () => {
  const [index, setIndex] = useState(0);

  const btnClicked = (index) => {
    setIndex(index);
  };

  const renderPost = () => {
    if (index == 0) {
      return (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.postBox}></View>
          <View style={styles.postBox2}></View>
          <View style={styles.postBox}></View>
        </View>
      );
    } else if (index == 1) {
      return (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.postBox2}></View>
          <View style={styles.postBox}></View>
        </View>
      );
    }
  };

  return (
    <Background>
      <InfoBox>
        <Circle style={styles.circle}></Circle>
        <InfoBtn>5 {"\n"}게시물</InfoBtn>
        <InfoBtn>135 {"\n"}팔로워</InfoBtn>
        <InfoBtn>129 {"\n"}팔로잉</InfoBtn>
      </InfoBox>
      <Text style={{ height: 30, padding: 5 }}> 박세준</Text>
      <StoryBox>
        <Story style={styles.storyBorder}>
          <View style={styles.storyContent}></View>
        </Story>
        <Story style={styles.storyBorder}>
          <View style={styles.storyContent}></View>
        </Story>
        <Story style={styles.storyBorder}>
          <IconPlus name="plus" size={35}></IconPlus>
        </Story>
      </StoryBox>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          borderTopWidth: 1,
          borderTopColor: "#eae5e5",
        }}
      >
        <View title={"1"} onPress={() => btnClicked(0)}>
          <TableIcon name="table" size={25}></TableIcon>
        </View>
        <View title={"2"} onPress={() => btnClicked(1)} style={styles.postbtn}>
          <TagIcon name="user-tag" size={25}></TagIcon>
        </View>
      </View>
      <View>{renderPost()}</View>
    </Background>
  );
};

export default Profile;
