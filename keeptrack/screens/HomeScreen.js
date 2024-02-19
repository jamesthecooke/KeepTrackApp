import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import TopMoneyContainer from "../components/TopMoneyContainer";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Overall Money</Text>
      </View>
      <View style={styles.containerRow}>
        <TopMoneyContainer />
        <TopMoneyContainer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3034",
    alignItems: "center",
  },

  titleContainer: {},

  title: {
    color: "white",
    fontSize: 28,
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
