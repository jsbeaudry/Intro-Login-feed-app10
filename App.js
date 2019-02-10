import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App10 from "./app10/home";
import Register from "./app10/register";
import Feed from "./app10/feed";

import { Ionicons } from "@expo/vector-icons";

const A10 = createStackNavigator({
  home: {
    screen: App10,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Feed: {
    screen: Feed,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A10);
