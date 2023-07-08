import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeFavoriteFromStore } from '../reducers/favorites';

export default function Artwork({ image, author, title, isFavorite, removeFromFavorites, cardStyle, imageStyle, textStyle, textContainerStyle, technique, type, description, department, funFact, showLabels = true }) {
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
        <View style={styles.textBox}>
          {showLabels && (<Text style={styles.label}>Author</Text>)}
          <Text style={[styles.text, textStyle]}>{author}</Text>
        </View>
        <View style={styles.textBox}>
        {showLabels && (<Text style={styles.label}>Title</Text>)}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>        
        {technique && (
          <View style={styles.textBox}>
          {showLabels && (<Text style={styles.label}>Technique</Text>)}
            <Text style={[styles.text, textStyle]}>{technique}</Text>
          </View>
        )}
        {type && (
          <View style={styles.textBox}>
          {showLabels && (<Text style={styles.label}>Type</Text>)}
            <Text style={[styles.text, textStyle]}>{type}</Text>
          </View>
        )}
        {department && (
          <View style={styles.textBox}>
          {showLabels && (<Text style={styles.label}>Department</Text>)}
            <Text style={[styles.text, textStyle]}>{department}</Text>
          </View>
        )}
        {description && (
          <View style={styles.textBox}>
          {showLabels && (<Text style={styles.label}>Description</Text>)}
            <Text style={[styles.text, textStyle]}>{description}</Text>
          </View>
        )}
        {funFact && (
          <View style={styles.textBox}>
          {showLabels && (<Text style={styles.label}>Fun Fact</Text>)}
            <Text style={[styles.text, textStyle]}>{funFact}</Text>
          </View>
        )}
      </ScrollView>

      {isFavorite && removeFromFavorites && (
        <TouchableOpacity
          onPress={handleRemoveFavorite}
          style={styles.removeFavoriteButton}
        >
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
    flexWrap: 'wrap', // Allow text to wrap onto the next line

  },

  textBox: {
    marginBottom: 5
  },

  label: {
    fontFamily: 'NotoSansMono-Bold',
  },

  removeFavoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },


});