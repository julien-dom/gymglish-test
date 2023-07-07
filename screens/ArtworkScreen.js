import {
    Button,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";
  import Artwork from "../components/Artwork";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  
  export default function ArtworkScreen({ navigation, route: { params: data } }) {
    console.log("data artpage", data);
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name={"angle-left"} size={40} color={"white"} />
        </TouchableOpacity>
        <Text>Artwork Screen</Text>
        <Artwork
          image={data.image}
          author={data.author}
          title={data.title}
        //   technique={data.technique}
        //   type={data.type}
        //   description={data.description}
          //   isFavorite
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "orange",
      alignItems: "center",
      justifyContent: "center",
    },
  });
