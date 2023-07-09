import React from "react";
import { Image } from "expo-image";

import {
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 1,
    borderBottomColor: "black",
    borderBottomWidth: 0.3,
    padding: 5,
    marginBottom: 5,
  },

  logo: {
    height: "70%",
    contentFit: "contain",
  },
});
