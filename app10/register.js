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
export default class Intro3 extends React.Component {
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
          padding: 32
        }}
      >
        <View style={{ marginTop: 140 }}>
          <Text
            style={{
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",

              height: 48,
              color: "#535d7e",
              fontSize: 26,
              lineHeight: 40
            }}
          >
            Complete Profile
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              width: 311,
              height: 40,
              opacity: 0.8,
              color: "#a9aebe",
              fontSize: 14,
              lineHeight: 20
            }}
          >
            Sign up for new account, enter your email and get started.
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            returnKeyType="done"
            style={{
              width: screenWidth - 70,
              height: 48,
              marginTop: 20,
              borderRadius: 4,
              borderColor: "#dadaed",
              borderStyle: "solid",
              padding: 10,
              borderWidth: 1,
              backgroundColor: "#ffffff"
            }}
            placeholder={"First Name"}
          />
          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            returnKeyType="done"
            style={{
              width: screenWidth - 70,
              height: 48,
              marginTop: 20,
              borderRadius: 4,
              borderColor: "#dadaed",
              borderStyle: "solid",
              padding: 10,
              borderWidth: 1,
              backgroundColor: "#ffffff"
            }}
            placeholder={"Last Name"}
          />
          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            returnKeyType="done"
            style={{
              width: screenWidth - 70,
              height: 48,
              marginTop: 20,
              borderRadius: 4,
              borderColor: "#dadaed",
              borderStyle: "solid",
              padding: 10,
              borderWidth: 1,
              backgroundColor: "#ffffff"
            }}
            placeholder={"Designation"}
          />
          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            returnKeyType="done"
            style={{
              width: screenWidth - 70,
              height: 48,
              marginTop: 20,
              borderRadius: 4,
              borderColor: "#dadaed",
              borderStyle: "solid",
              padding: 10,
              borderWidth: 1,
              backgroundColor: "#ffffff"
            }}
            placeholder={"Mobile Number"}
          />

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Feed");
            }}
            style={{
              marginTop: 20,
              width: 311,
              height: 48,
              backgroundColor: "#917FFD",
              shadowColor: "rgba(0, 0, 0, 0.1)",
              shadowOffset: { width: 10, height: 0 },
              shadowRadius: 20,
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "#ffffff",

                fontSize: 17,
                fontWeight: "500"
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
