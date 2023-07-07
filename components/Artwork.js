import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { addFavoriteToStore, removeFavoriteFromStore } from '../reducers/favorites';
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Artwork({ props }) {
  const [favorite, setFavorite] = useState(false);
  
  const dispatch = useDispatch();

  const handleFavorite = () => {
    setFavorite(!favorite);
    if(props.isFavorite){
      dispatch(removeFavoriteFromStore(props))
    } else {
      dispatch(addFavoriteToStore(props))
    }
  };

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text>{props.author}</Text>
        <Text>{props.title}</Text>
      </View>

      <View style={styles.favoriteContainer}>
      <Text>Add to favorite</Text>
      <TouchableOpacity onPress={()=>handleFavorite()}>
        <FontAwesomeIcon
          icon={faHeart}
          size={20}
          color={favorite ? "#2D0861" : "#E9D3F1"}
          style={styles.icon}
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
    isplay: "flex",
    flexDirection: "row",
  },

  icon: {
    alignSelf: 'start',
  }
});
