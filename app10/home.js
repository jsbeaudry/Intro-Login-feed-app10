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
import Swiper from "react-native-swiper";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import P1 from "./intro1";
import P2 from "./intro2";
import P3 from "./getstart";
export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dot={
          <View
            style={{
              backgroundColor: "#3AA0F7",
              width: 30,
              height: 4,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 100
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#6F8CFB",
              width: 30,
              height: 4,
              borderRadius: 50,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 100
            }}
          />
        }
      >
        <View style={styles.slide1}>
          <P1 go={this.props} />
        </View>
        <View style={styles.slide2}>
          <P2 go={this.props} />
        </View>
        <View style={styles.slide3}>
          <P3 go={this.props} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
