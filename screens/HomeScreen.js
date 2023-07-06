import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, SafeAreaView, scrollView, ScrollView } from "react-native";
import Artwork from "../components/Artwork";
// api = https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=200&female_artists=none

export default function HomeScreen({ navigation }) {
  const [artworksData, setArtworksData] = useState([]);

  useEffect(() => {
    fetch(
      "https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=10&female_artists=none"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("author is", data.data[0].creators[0].description);
        const formatedData = data.data.map((artwork) => {
          let author = artwork.creators[0].description;
          let date = artwork.creation_date;
          let title = artwork.title;
          let image = artwork.images.web.url;
          let technique = artwork.technique;
          let type = artwork.type;
          let description = artwork.wall_description;
          let funFact = artwork.fun_fact;
          let department = artwork.department;
          return {
            author,
            date,
            title,
            image,
            technique,
            type,
            description,
            funFact,
            department,
          };
        });
        console.log("formated data is", formatedData);
        setArtworksData(formatedData);
      });
  }, []);

  const artworks = artworksData.map((data, i) => {
    console.log('map data is', data)
    return <Artwork key={i} image={data.image} />;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <ScrollView>{artworks}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollView: {
    alignItems: 'center',
  },
});
