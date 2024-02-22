import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { supabase } from "../lib/superbase";
import TopMoneyContainer from "../components/TopMoneyContainer";
import MoneyTypes from "../components/MoneyTypes";

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
      <View>
        <MoneyTypes />
        <MoneyTypes />
        <MoneyTypes />
      </View>

      <View style={styles.verticallySpaced}>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
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

// comment for new branch
