import {
    Button,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";
  import { useDispatch, useSelector } from "react-redux";
  import Artwork from "../components/Artwork";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addFavoriteToStore, removeFavoriteFromStore, removeAllFavorites } from "../reducers/favorites";

  export default function ArtworkScreen({ navigation, route: { params: data } }) {
  console.log('paramsdata', data)
  const favorites = useSelector((state) => state.favorites.value);
  const dispatch = useDispatch()

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
    iconStyle = { 'color': '#E9BE59' };

  }    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name={"angle-left"} size={40} color={"white"} />
        </TouchableOpacity>
        <Text>Artwork Screen</Text>
        <Artwork
          image={data.image}
          author={data.author}
          title={data.title}
        //   technique={data.technique}
        //   type={data.type}
        //   description={data.description}
            isFavorite={isFavorite}
        />

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
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "orange",
      alignItems: "center",
      justifyContent: "center",
    },
  });
