import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Artwork from '../components/Artwork';
import ButtonComponent from '../components/ButtonComponent';
import Header from "../components/Header";
import { removeAllFavorites } from '../reducers/favorites';
import { useDispatch, useSelector } from 'react-redux';

export default function FavoriteScreen({  navigation }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.value);

  let favoritesArtworks = <Text style={styles.noFavText}>No favorites yet</Text>;
  let removeFavorites;
  if (favorites.length > 0) {
    favoritesArtworks = favorites.map((data, i) => {
      const handleArtPress = () => {
        console.log("click art");
        navigation.navigate('Artwork', {...data})
      };

      return (
        <TouchableOpacity key={i} onPress={() => handleArtPress()}>
        <Artwork
          key={i}
          image={data.image}
          author={data.author}
          title={data.title}
          cardStyle={styles.favoriteCard}
          imageStyle={styles.favoriteImage}
          textStyle={styles.favoriteText} 
          authorStyle={styles.favoriteAuthorText} 
          titleStyle={styles.favoriteTitleText} 
          textContainerStyle={styles.favoriteTextContainer}          
          isFavorite
          removeFromFavorites={true}
        />
        </TouchableOpacity>
      );
    });

    const handleRemoveAllFavorites = () => {
      dispatch(removeAllFavorites());
    };

    removeFavorites = (
      <ButtonComponent onPress={handleRemoveAllFavorites} buttonText='Delete all Favorites' style={styles.deleteButton}/>
    );


  }

  return (
    <SafeAreaView style={styles.favoriteContainer}>
      <Header />
      <View style={styles.scrollableContent}>
        <ScrollView contentContainerStyle={styles.favoriteArtworksBox}>
          {favoritesArtworks}
        </ScrollView>
      </View>
      <View style={styles.removeFavoritesBox}>
        {removeFavorites}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  favoriteContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center',
    height: '100%',
  },

  noFavText:{

  },

  favoriteCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.6,
    aspectRatio: 0.78, 
    margin: 0.5,
    padding: 5,
  },
  
  scrollableContent: {
    display: 'flex',
    flex: 1,
    marginBottom: 65,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },

  favoriteArtworksBox: {
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
  },

  favoriteImage: {
    width: "95%",
    aspectRatio: 1,
    borderRadius: 10,
    contentFit: "contain",
    marginBottom: 5,
  },

  favoriteTextContainer: {
    width: "95%",
  },

  favoriteAuthorText: {
    fontFamily: "NotoSansMono-Bold",
    fontSize: 12,
  },

  favoriteTitleText: {
    fontSize: 12,
    fontFamily: "NotoSansMono-Regular",
  },

  favoriteTitle: {
    fontFamily: "NotoSansMono-Bold",
  },

  removeFavoritesBox: {
    position: 'absolute',
    bottom: 10,
    marginBottom: 5,
  },
});