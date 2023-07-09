import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeFavoriteFromStore } from "../reducers/favorites";
import { Image } from "expo-image";

export default function Artwork({
  image,
  author,
  title,
  isFavorite,
  removeFromFavorites,
  cardStyle,
  imageStyle,
  textStyle,
  authorStyle,
  titleStyle,
  textContainerStyle,
  technique,
  type,
  date,
  description,
  department,
  funFact,
  showLabels = true,
}) {
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
          {showLabels && <Text style={styles.label}>Author</Text>}
          <Text style={[styles.text, textStyle, authorStyle]}>{author}</Text>
        </View>
        <View style={styles.textBox}>
          {showLabels && <Text style={styles.label}>Title</Text>}
          <Text style={[styles.text, textStyle, titleStyle]}>{title}</Text>
        </View>
        {date && (
          <View style={styles.textBox}>
            {showLabels && <Text style={styles.label}>Date</Text>}
            <Text style={[styles.text, textStyle]}>{date}</Text>
          </View>
        )}
        {technique && (
          <View style={styles.textBox}>
            {showLabels && <Text style={styles.label}>Technique</Text>}
            <Text style={[styles.text, textStyle]}>{technique}</Text>
          </View>
        )}
        {type && (
          <View style={styles.textBox}>
            {showLabels && <Text style={styles.label}>Type</Text>}
            <Text style={[styles.text, textStyle]}>{type}</Text>
          </View>
        )}
        {department && (
          <View style={styles.textBox}>
            {showLabels && <Text style={styles.label}>Department</Text>}
            <Text style={[styles.text, textStyle]}>{department}</Text>
          </View>
        )}
        {description && (
          <View style={styles.textBox}>
            {showLabels && <Text style={styles.label}>Description</Text>}
            <Text style={[styles.text, textStyle]}>
              {description.replace(/<[^>]+>/g, "")}
            </Text>
          </View>
        )}
        {funFact && (
          <View style={styles.textBox}>
            {showLabels && <Text style={styles.label}>Fun Fact</Text>}
            <Text style={[styles.text, textStyle]}>
              {funFact.replace(/<[^>]+>/g, "")}
            </Text>
          </View>
        )}
      </ScrollView>

      {isFavorite && removeFromFavorites && (
        <TouchableOpacity
          onPress={handleRemoveFavorite}
          style={styles.removeFavoriteButton}
        >
          <FontAwesomeIcon icon={faTimes} size={18} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  textBox: {
    marginBottom: 7,
  },

  label: {
    fontFamily: "NotoSansMono-Bold",
    fontSize: 16,
  },

  removeFavoriteButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },

  text: {
    fontSize: 16,
    textAlign: 'justify'
  },
});
