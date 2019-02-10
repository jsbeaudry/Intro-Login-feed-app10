import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  Text,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default class Intro2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              marginLeft: 60,
              marginRight: 60,
              marginTop: 100,
              marginBottom: 30,
              width: screenWidth,
              height: 200
            }}
            source={require("./design1.png")}
          />
          <Text
            style={{
              alignSelf: "center",
              width: 289,
              height: 44,

              color: "#535d7e",
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              fontSize: 26,
              fontWeight: "600",
              lineHeight: 40
            }}
          >
            Connect with Designer
          </Text>

          <Text
            style={{
              alignSelf: "center",
              width: 305,
              height: 40,
              opacity: 0.8,
              color: "#a9aebe",
              fontSize: 14,
              fontWeight: "400",
              textAlign: "center",
              lineHeight: 20,
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto"
            }}
          >
            Kindness And Motivation Tips Challenge Groups To Make A Difference
          </Text>
        </View>
      </View>
    );
  }
}
