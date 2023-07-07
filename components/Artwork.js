import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeFavoriteFromStore } from '../reducers/favorites';

export default function Artwork({ image, author, title, isFavorite, removeFromFavorites }) {
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFavoriteFromStore({ title }));
  };

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
      </View>

      {isFavorite && removeFromFavorites && (
        <TouchableOpacity onPress={handleRemoveFavorite} style={styles.removeFavoriteButton}>
          <FontAwesomeIcon icon={faTimes} size={18} color="#E9BE59" />
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: 'black',
    borderWidth: 2,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 300,
    padding: 5,
  },
  image: {
    width: '80%',
    height: '80%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  removeFavoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});