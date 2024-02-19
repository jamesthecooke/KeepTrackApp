import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function InnerMoneyType() {
  return (
    <View style={styles.container}>
      <View style={styles.catContainer}>
        <Image
          style={styles.img}
          source={require("../assets/icon.png")}
        ></Image>
        <Text style={styles.text}>blaaaaaaaaaaaa</Text>
      </View>
    </View>
  );
}

export default InnerMoneyType;

const styles = StyleSheet.create({
  container: {},

  catContainer: {
    flexDirection: "row",
    padding: 3,
    margin: 3,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#6B6C70",
    borderRadius: 10,
    width: "100%",
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
  },

  text: {
    color: "white",
    fontSize: 15,
    padding: 1,
  },
});
