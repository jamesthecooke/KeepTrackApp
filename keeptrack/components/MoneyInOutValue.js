import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import MoneyTypes from "./MoneyTypes";

function MoneyInOutValue(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.moneyValue}>20000 |</Text>
      </View>
      <MoneyTypes />
    </SafeAreaView>
  );
}

export default MoneyInOutValue;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#444751",
    width: 300,
    height: 150,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    shadowColor: "#000", // shadow color
    shadowOffset: {
      width: 0, // horizontal offset
      height: 5, // vertical offset
    },
    shadowOpacity: 0.5, // shadow opacity
    shadowRadius: 3.84, // blur radius
    elevation: 5, // this is needed for Android
  },

  moneyValue: {
    color: "#6BFE11",
    fontSize: 45,
  },
});
