import React from "react";
import { Image } from 'expo-image';

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
      {/* <View style={styles.titleBox}>
        <Text style={styles.headerTitle}>Women In Art</Text>
      </View> */}
      <Image
        source={require('../assets/logo.png')} 
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 1,
    borderBottomColor: "black",
    borderBottomWidth: 0.3,
    padding: 5,
    marginBottom: 5,
  },

  titleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },

  headerTitle: {
    fontFamily: "NotoSansMono-Bold",
    fontSize: 24,
    letterSpacing: 1.5,
  },

  textAlignBottom: {
    textAlignVertical: 'bottom',
  },

  logo:{
  height: '70%',
  // ratio: 0.5,
  contentFit: "contain",
}
});
