import React, { Component } from "react";
import {
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { Ionicons } from "@expo/vector-icons";
export default class Feed extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 50,
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <Image
              source={require("./user3.png")}
              style={{
                width: 50,
                height: 50,

                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowOffset: { width: 10, height: 0 },
                shadowRadius: 20,
                margin: 5
              }}
              borderRadius={25}
            />

            <View
              style={{
                flex: 70,
                height: 50,
                backgroundColor: "#fff"
              }}
            />
            <TouchableOpacity
              style={{
                flex: 15,
                height: 50,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Ionicons
                name="ios-search"
                type="ionicon"
                color={"#050135"}
                size={26}
                iconStyle={{}}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  margin: 5,
                  backgroundColor: "#eee",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Ionicons
                  name="ios-add"
                  type="ionicon"
                  color={"#050135"}
                  size={30}
                  iconStyle={{}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: "#535d7e",
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 16
                }}
              >
                {"add new"}
              </Text>
            </View>
            <FlatList
              horizontal
              data={[
                {
                  key: "b",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsgeiOSnhjqX4ksueKcEonrlYgiE15uYXiELo7OKq88r9ZR5w",
                  username: "bob"
                },
                {
                  key: "b",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDazRxG0HDr0rzJcn72xWTyiZQW13_SQc8ylxCbBSNsigQgRTQpw",
                  username: "John"
                },
                {
                  key: "b",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0pf7N5--uzqtLEmEwEXDFPqhMXXNIZXl0dZJBYgBUONemKB-KQ",
                  username: "Yedi"
                },
                {
                  key: "b",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsgeiOSnhjqX4ksueKcEonrlYgiE15uYXiELo7OKq88r9ZR5w",
                  username: "bob"
                },
                {
                  key: "b",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDazRxG0HDr0rzJcn72xWTyiZQW13_SQc8ylxCbBSNsigQgRTQpw",
                  username: "John"
                },
                {
                  key: "b",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0pf7N5--uzqtLEmEwEXDFPqhMXXNIZXl0dZJBYgBUONemKB-KQ",
                  username: "Yedi"
                }
              ]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 50,
                      height: 50,

                      shadowColor: "rgba(0, 0, 0, 0.1)",
                      shadowOffset: { width: 10, height: 0 },
                      shadowRadius: 20,
                      margin: 5
                    }}
                    borderRadius={25}
                  />
                  <Text
                    style={{
                      color: "#535d7e",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 16
                    }}
                  >
                    {item.username}
                  </Text>
                </View>
              )}
            />
          </View>
          <FlatList
            data={[
              {
                key: "b",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsgeiOSnhjqX4ksueKcEonrlYgiE15uYXiELo7OKq88r9ZR5w",
                username: "bob"
              },
              {
                key: "b",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDazRxG0HDr0rzJcn72xWTyiZQW13_SQc8ylxCbBSNsigQgRTQpw",
                username: "John"
              },
              {
                key: "b",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0pf7N5--uzqtLEmEwEXDFPqhMXXNIZXl0dZJBYgBUONemKB-KQ",
                username: "Yedi"
              }
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#fff",
                  margin: 5,
                  borderColor: "#eee",
                  borderWidth: 0,
                  borderRadius: 0
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: screenWidth - 10,
                    height: 160,

                    shadowColor: "rgba(0, 0, 0, 0.1)",
                    shadowOffset: { width: 10, height: 0 },
                    shadowRadius: 20
                  }}
                  borderRadius={10}
                />
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 15 }}>
                    <Image
                      source={item.username}
                      style={{
                        width: 40,
                        height: 40,

                        shadowColor: "rgba(0, 0, 0, 0.1)",
                        shadowOffset: { width: 10, height: 0 },
                        shadowRadius: 20,
                        margin: 5
                      }}
                      borderRadius={20}
                    />
                  </View>
                  <View style={{ flex: 70, height: 40, marginBottom: 10 }}>
                    <Text
                      style={{
                        margin: 10,
                        color: "#535d7e",
                        fontSize: 16,
                        fontWeight: "500",
                        lineHeight: 16
                      }}
                    >
                      Alexandra Zutto
                    </Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        width: 150,
                        opacity: 0.5,
                        color: "#535d7e",
                        fontSize: 12,
                        fontWeight: "400",
                        lineHeight: 12
                      }}
                    >
                      {"3 minutes ago"}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 15,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Ionicons
                      name="ios-heart"
                      type="ionicon"
                      color={"red"}
                      size={20}
                      iconStyle={{}}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
