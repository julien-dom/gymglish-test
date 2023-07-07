import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Artwork from "../components/Artwork";
import { removeAllFavorites } from "../reducers/favorites";

export default function FavoriteScreen({ navigation }) {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.value);

  let favoritesArtworks = <Text>No favorite yet</Text>;
  let removeFavorites
  if (favorites.length > 0) {
    favoritesArtworks = favorites.map((data, i) => {
      return (
        <Artwork
          key={i}
          image={data.image}
          author={data.author}
          title={data.title}
          isFavorite
        />
      );
    });

    removeFavorites = <TouchableOpacity onPress={() => handleRemoveFavorites()}>
    <Text>Remove all favorites</Text>
    </TouchableOpacity>
  }

  const handleRemoveFavorites = () => {
    dispatch(removeAllFavorites())
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorite Screen</Text>
      {favoritesArtworks}
      {removeFavorites}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
