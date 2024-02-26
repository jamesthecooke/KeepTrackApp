import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import MoneyInOutValue from "../components/MoneyInOutValue";

function MoneyIn() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Money IN</Text>
      <MoneyInOutValue />
    </SafeAreaView>
  );
}

export default MoneyIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3034",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 28,
  },
});
