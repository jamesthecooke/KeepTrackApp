import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  AppState,
  SafeAreaView,
  Text,
} from "react-native";
import { supabase } from "../lib/superbase";
import { Button, Input } from "react-native-elements";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.text}>. Keep Track .</Text>
        </View>
        <View style={styles.inputs}>
          <Input
            label="Email"
            labelStyle={{ color: "white" }}
            inputStyle={{ color: "white" }}
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email@address.com"
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.inputs}>
          <Input
            label="Password"
            labelStyle={{ color: "white" }}
            inputStyle={{ color: "white" }}
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={"none"}
          />
        </View>
        <View>
          <Button
            style={styles.btns}
            buttonStyle={{
              backgroundColor: "#6B6C70",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 20,
            }}
            title="Sign in"
            disabled={loading}
            onPress={() => signInWithEmail()}
          />
        </View>
        <View>
          <Button
            style={styles.btns}
            buttonStyle={{
              backgroundColor: "#6B6C70",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 20,
            }}
            title="Sign up"
            disabled={loading}
            onPress={() => signUpWithEmail()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E3034",
  },

  card: {
    backgroundColor: "#444751",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },

  inputs: {
    backgroundColor: "#6B6C70",
    borderRadius: 10,
    marginBottom: 10,
  },

  btns: {
    backgroundColor: "#6B6C70",
    borderRadius: 20,
    marginBottom: 5,
    marginTop: 5,
  },

  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 20,
  },
});
