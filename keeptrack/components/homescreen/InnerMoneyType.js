import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function InnerMoneyType() {
  return (
    <View style={styles.container}>
      <View style={styles.catImg}>
        <Image
          style={styles.img}
          source={require("../../assets/icon.png")}
        ></Image>
      </View>

      <View style={styles.catText}>
        <Text style={styles.text}>Groceries</Text>
      </View>

      <View style={styles.catValue}>
        <Text style={styles.text}>£10.50</Text>
      </View>
    </View>
  );
}

export default InnerMoneyType;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    margin: 4,
  },

  catImg: {
    backgroundColor: "#6B6C70",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  catText: {
    flexDirection: "row",
    padding: 3,
    margin: 3,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#6B6C70",
    borderRadius: 10,
    width: "45%",
  },

  catValue: {
    flexDirection: "row",
    backgroundColor: "#6B6C70",
    borderRadius: 10,
    alignItems: "center",
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },

  text: {
    color: "white",
    fontSize: 15,
    padding: 1,
    marginRight: 3,
  },
  value: {
    color: "white",
    fontSize: 13,
    marginRight: 3,
  },
});
