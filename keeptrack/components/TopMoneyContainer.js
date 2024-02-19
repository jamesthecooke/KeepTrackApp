import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

function TopMoneyContainer() {
  return (
    <TouchableOpacity onPress={() => Alert.alert("this works")}>
      <View style={styles.container}>
        <Text style={styles.moneyValue}>20000 |</Text>
        <Text style={styles.subHeader}>Money In</Text>
      </View>
    </TouchableOpacity>
  );
}

export default TopMoneyContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#444751",
    width: 150,
    height: "10%",
    alignItems: "flex-start",
    borderRadius: 10,
    height: 96,
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
    fontSize: 29,
    marginLeft: "2%",
  },

  subHeader: {
    color: "#6BFE11",
    fontSize: 18,
    textAlign: "left",
    paddingTop: "10%",
    marginLeft: "2%",
  },
});
