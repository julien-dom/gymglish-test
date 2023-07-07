import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Artwork
 from '../components/Artwork';
export default function Favorite({ navigation }) {

  const favorites = useSelector((state) => state.favorites.value);

 let favoritesArtworks = <Text>No article</Text>;
 if (favorites.length > 0) {
  favoritesArtworks = favorites.map((data, i) => {
    return <Artwork key={i} props={data} isFavorite />;
  });
}
 return (
   <SafeAreaView style={styles.container}>
     <Text>Favorite Screen</Text>
     {favoritesArtworks}
   </SafeAreaView>
 );
}

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
   });