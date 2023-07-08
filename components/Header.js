import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleBox}>
        <Text style={styles.headerLetter}>W</Text>
        <Text style={styles.headerTitle}>omen In Art</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.07,
    width: Dimensions.get("window").width * 1,
    backgroundColor: "white",
    borderBottomColor: "black",
    borderBottomWidth: 0.3,
    padding: 10,
    marginBottom: 5
  },

  titleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },

  headerLetter: {
    fontFamily: "NotoSansMono-Bold",
    fontSize: 48,
    letterSpacing: 1.5,
  },

  headerTitle: {
    fontFamily: "NotoSansMono-Bold",
    fontSize: 24,
    letterSpacing: 1.5,
  },
});
