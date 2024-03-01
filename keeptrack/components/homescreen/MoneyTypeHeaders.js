import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function MoneyTypeHeaders() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MoneyTypeHeaders</Text>
    </View>
  );
}

export default MoneyTypeHeaders;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#6B6C70",
    width: "100%",
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 5,
  },

  text: {
    color: "white",
  },
});
