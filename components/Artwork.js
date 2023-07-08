import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeFavoriteFromStore } from '../reducers/favorites';

export default function Artwork({ image, author, title, isFavorite, removeFromFavorites, cardStyle, imageStyle, textStyle, textContainerStyle, technique, type, description, department, funFact }) {
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFavoriteFromStore({ title }));
  };



  return (
    <View style={[styles.card, cardStyle]}>

      <Image
        style={[styles.image, imageStyle]}
        source={{
          uri: image,
        }}
      />      
      <ScrollView style={[styles.textContainer, textContainerStyle]}>
        <Text style={[styles.text, textStyle]}>Author: {author}</Text>
        <Text style={[styles.text, textStyle]}>Title: {title}</Text>
        {technique && <Text style={[styles.text, textStyle]}>Technique: {technique}</Text>}
        {type && <Text style={[styles.text, textStyle]}>Type: {type}</Text>}
        {department && <Text style={[styles.text, textStyle]}>Departmennt: {department}</Text>}
        {description && <Text style={[styles.text, textStyle]}>Description: {description}</Text>}
        {funFact && <Text style={[styles.text, textStyle]}>funFact: {funFact}</Text>}
      </ScrollView>

      {isFavorite && removeFromFavorites && (
        <TouchableOpacity onPress={handleRemoveFavorite} style={styles.removeFavoriteButton}>
          <FontAwesomeIcon icon={faTimes} size={18} color="#E9BE59" />
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
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