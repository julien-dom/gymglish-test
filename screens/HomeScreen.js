import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

// api = https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=200&female_artists=none


export default function HomeScreen({ navigation }) {
  const [artworksData, setArtworksData] = useState([]);

  useEffect(() => {
    fetch('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=200&female_artists=none')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // const formatedData = data.movies.map(movie => {
        //   let overview = movie.overview;
        //   return { title: movie.title, poster, voteAverage: movie.vote_average, voteCount: movie.vote_count, overview };
        // });
        // setArtworksData(formatedData);
      });
  }, []);

 return (
   <SafeAreaView style={styles.container}>
     <Text>Home Screen</Text>
   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
   });