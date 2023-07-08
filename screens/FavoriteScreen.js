import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Artwork from '../components/Artwork';
import { removeAllFavorites } from '../reducers/favorites';
import ButtonComponent from '../components/ButtonComponent';

export default function FavoriteScreen({  navigation }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.value);

  let favoritesArtworks = <Text>No favorites yet</Text>;
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
      // <TouchableOpacity onPress={handleRemoveAllFavorites}>
      //   <Text>Remove all favorites</Text>
      // </TouchableOpacity>
      <ButtonComponent onPress={handleRemoveAllFavorites} buttonText='Delete all Favorites'/>
    );


  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorite Screen</Text>
      
      <ScrollView contentContainerStyle={styles.favoriteArtworksBox}>{favoritesArtworks}</ScrollView>
      {removeFavorites}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    alignItems: "center",
    // justifyContent: "center",
  },

  favoriteCard: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.7, 
    aspectRatio: 0.8, // ration largeur/hauteur de 1 pour card carrée
    // height: "auto",
    // maxHeight: '80%',
    marginBottom: 10,
    padding: 10
  },

  favoriteArtworksBox: {
    backgroundColor: "green",
    flexDirection: 'column',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    // maxHeight: Dimensions.get('window').height * 0.8,

  },

  favoriteImage: {
    width: "100%",
    aspectRatio: 1, // conserve ratio image
    marginBottom: 5,
    resizeMode: "contain",
  },

  favoriteText:{
    fontSize: 12,
  },

  favoriteTextContainer:{
    width: '75%',
  },

  scrollContainer: {
    flex: 1,
    maxHeight: '90%',
    marginBottom: 10,
  },
});