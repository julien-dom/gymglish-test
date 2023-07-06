import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Artwork({image}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
            uri: image,
          }}      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 400,
  },

  image: {
    width: 150,
    height: 150,
  },
});
