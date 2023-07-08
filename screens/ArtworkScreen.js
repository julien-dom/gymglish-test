import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Artwork from "../components/Artwork";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addFavoriteToStore, removeFavoriteFromStore } from "../reducers/favorites";
import { Button } from 'react-native-paper';

export default function ArtworkScreen({ navigation, route: { params: data } }) {
  console.log("paramsdata", data);
  const favorites = useSelector((state) => state.favorites.value);
  const dispatch = useDispatch();

  const isFavorite = favorites.some(
    (favorite) => favorite.title === data.title
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteFromStore(data));
    } else {
      dispatch(addFavoriteToStore(data));
    }
  };

  let iconStyle = {};
  if (isFavorite) {
    iconStyle = { color: "#E9BE59" };
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome name={"angle-left"} size={40} color={"black"} />
      </TouchableOpacity>
      <Text>Artwork Screen</Text>
      <Artwork
        image={data.image}
        author={data.author}
        title={data.title}
        technique={data.technique}
        type={data.type}
        description={data.description}
        department={data.department}
        funFact={data.funFact}
        cardStyle={styles.artworkCard}
        imageStyle={styles.artworkImage}
        textStyle={styles.artworkText}
        textContainerStyle={styles.artworkTextContainer}
        isFavorite={isFavorite}
      />
      <View style={styles.favoriteContainer}>
        <Text>Add to favorite</Text>
        <TouchableOpacity onPress={() => handleFavorite()}>
          <FontAwesomeIcon icon={faHeart} size={20} style={iconStyle} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    // justifyContent: "center",
  },

  artworkCard: {
    display: "flex",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
    width: Dimensions.get("window").width * 0.99,
    // aspectRatio: 1, // ration largeur/hauteur de 1 pour card carrée
    height: "auto",
    maxHeight: '80%',
    margin: 1,
    padding: 10
  },

  artworkImage: {
    width: "100%",
    aspectRatio: 1, // conserve ratio image
    marginBottom: 5,
    resizeMode: "contain",

  },

  artworkText: {
    marginBottom: 5,
  },

  artworkTextContainer: {
    alignSelf: 'flex-start'
  },
});
