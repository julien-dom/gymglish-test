import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { addFavoriteToStore, removeFavoriteFromStore } from '../reducers/favorites';
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Artwork({ image, author, title, isFavorite, type, technique, description }) {
  
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if(isFavorite){
      dispatch(removeFavoriteFromStore({ title }))
    } else {
      dispatch(addFavoriteToStore({ image, author, title }))
    }
  };

  let iconStyle = {};
  if (isFavorite) {
    iconStyle = { 'color': '#E9BE59' };
  }
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text>{author}</Text>
        <Text>{title}</Text>
        {/* <Text>{technique}</Text>
        <Text>{type}</Text>
        <Text>{description}</Text> */}
      </View>

      <View style={styles.favoriteContainer}>
      <Text>Add to favorite</Text>
      <TouchableOpacity onPress={()=>handleFavorite()}>
        <FontAwesomeIcon
          icon={faHeart}
          size={20}
          style={iconStyle}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 300,
    padding: 5,
  },

  image: {
    width: "80%",
    height: "80%",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
  },

  favoriteContainer:{
    display: "flex",
    flexDirection: "row",
  },

});
