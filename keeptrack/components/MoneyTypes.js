import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import InnerMoneyType from "./InnerMoneyType";

function MoneyTypes(props) {
  return (
    <TouchableOpacity onPress={() => Alert.alert("this works")}>
      <View style={styles.container}>
        <InnerMoneyType />
        <InnerMoneyType />
        <InnerMoneyType />
      </View>
    </TouchableOpacity>
  );
}

export default MoneyTypes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#444751",
    width: 300,
    alignItems: "center",
    borderRadius: 10,
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
});
