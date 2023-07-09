import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textBox}>
        <Text style={styles.headerTitle}>Art by Women</Text>
        <Text style={styles.headerSubTitle}>The Cleveland Museum of Art</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: Dimensions.get("window").height * 0.08,
    width: Dimensions.get("window").width * 1,
    borderBottomColor: "black",
    borderBottomWidth: 0.4,
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'white'
  },

  textBox:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  headerTitle: {
    color: "black",
    fontFamily: "NotoSansMono-Bold",
    fontSize: 22,
  },

  headerSubTitle:{
    color: "black",
    fontFamily: "NotoSansMono-Bold",
    fontSize: 12,
  }
});
