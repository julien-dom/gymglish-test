import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Artwork from "../components/Artwork";
import Header from "../components/Header";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addFavoriteToStore,
  removeFavoriteFromStore,
} from "../reducers/favorites";
import ButtonComponent from "../components/ButtonComponent";

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

  let buttonText = isFavorite ? "Remove from Favorites" : "Add to Favorites";

  return (
    <SafeAreaView style={styles.artworkContainer}>
      <Header />
      <TouchableOpacity
        onPress={()=>navigation.goBack()}
        style={styles.angleLeft}
      >
        <FontAwesome name={"angle-left"} size={40} color={"black"} />
      </TouchableOpacity>
      <View style={styles.artworkBox}>
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
      </View>
      <View style={styles.buttonBox}>
      <ButtonComponent
        buttonText={buttonText}
        isFavorite={isFavorite}
        onPress={handleFavorite}
        icon="heart"
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  artworkContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center',
    height: '100%',
  },

  angleLeft: {
    alignSelf: "flex-start",
    marginLeft: 10,
  },

  // artworkBox:{
  //   display: 'flex',
  //   flex: 1,
  //   // marginBottom: 60,
  //   backgroundColor: "white",
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },

  artworkCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
    width: Dimensions.get("window").width * 1,
    // aspectRatio: 1, // ration largeur/hauteur de 1 pour card carrée
    height: "auto",
    maxHeight: "90%",
    marginBottom: 10,
    padding: 10,
  },

  artworkImage: {
    width: "90%",
    aspectRatio: 1, // conserve ratio image
    marginBottom: 5,
    contentFit: "contain",
  },

  artworkText: {
    marginBottom: 5,
    fontFamily: "NotoSansMono-Regular",
  },

  artworkTextContainer: {
    alignSelf: "flex-start",
    height: '100%'
  },

  buttonBox: {
    position: 'absolute',
    bottom: 20,
    marginBottom: 10,
  },
});
