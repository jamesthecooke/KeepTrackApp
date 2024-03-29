import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import { supabase } from "../lib/superbase";

function InnerMoneyType() {
  const [festchError, setFetchError] = useState(null);
  const [moneyTypes, setMoneyTypes] = useState(null);

  useEffect(() => {
    const fetchValues = async () => {
      const { data, error } = await supabase.from("Money in").select();

      if (error) {
        setFetchError("could not fetch");
        // setValues(null);
      }
      if (data) {
        setMoneyTypes(data);
        setFetchError(null);
      }
    };

    fetchValues();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.catImg}>
        <Image
          style={styles.img}
          source={require("../../assets/icon.png")}
        ></Image>
      </View>

      <View style={styles.catText}>
        {festchError && <Text>{festchError}</Text>}
        {moneyTypes && (
          <View style={styles.text}>
            {moneyTypes.map((moneyTypes) => (
              <Text key={moneyTypes.id}>{moneyTypes.Name}</Text>
            ))}
          </View>
        )}
      </View>

      <View style={styles.catValue}>
        {festchError && <Text>{festchError}</Text>}
        {moneyTypes && (
          <View style={styles.text}>
            {moneyTypes.map((moneyTypes) => (
              <Text key={moneyTypes.id}>{moneyTypes.Value}</Text>
            ))}
          </View>
        )}
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
