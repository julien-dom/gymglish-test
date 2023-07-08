import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Artwork from "../components/Artwork";
import DropdownComponent from "../components/DropdownComponent";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  const favorites = useSelector((state) => state.favorites.value);
  const [artworksData, setArtworksData] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [filteredArtworks, setFilteredArtworks] = useState([]);

  useEffect(() => {
    fetch(
      "https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=50&female_artists=none"
    )
      .then((response) => response.json())
      .then((data) => {
        const formatedData = data.data.map((artwork) => {
          let author = artwork.creators[0].description;
          let date = artwork.creation_date;
          let title = artwork.title;
          let image = artwork.images.web.url;
          console.log(image);
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

        const departmentsData = data.data.map((artwork) => {
          let department = artwork.department;
          return {
            department,
          };
        });
        setArtworksData(formatedData);
        setDepartments(departmentsData);
      });
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      const filteredArtworks = artworksData.filter(
        (data) => data.department === selectedDepartment
      );
      setFilteredArtworks(filteredArtworks);
    } else {
      setFilteredArtworks(artworksData);
    }
  }, [artworksData, selectedDepartment]);

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
  };

  // Obtenir les catégories uniques et les mettre au format pour le dropdown
  const uniqueDepartments = [...new Set(departments.map((e) => e.department))];
  const departmentsDropdown = [
    { label: "All Departments", value: null },
    ...uniqueDepartments.map((data, i) => ({
      label: data,
      value: data,
    })),
  ];

  const artworks = filteredArtworks.map((data, i) => {
    // const isFavorite = favorites.some(
    //   (favorite) => favorite.title === data.title
    // );
    const formattedAuthor = data.author.replace(/\([^()]*\)/g, "").trim();
    const handleArtPress = () => {
      console.log("click art");
      navigation.navigate('Artwork', {...data})
    };

    return (
      <TouchableOpacity key={i} onPress={() => handleArtPress()}>
        <Artwork
          image={data.image}
          author={formattedAuthor}
          title={data.title}
          cardStyle={styles.homeCard}
          imageStyle={styles.homeImage}
          textStyle={styles.homeText}
          authorStyle={styles.authorText} // Add artistStyle prop
          titleStyle={styles.titleText} // Add titleStyle prop
          textContainerStyle={styles.homeTextContainer}
          showLabels={false}
          // isFavorite={isFavorite}
        />
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Header />
      <DropdownComponent
        departments={departmentsDropdown}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={handleDepartmentChange}
      />
      <ScrollView contentContainerStyle={styles.homeArtworksBox}>{artworks}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
  },

  
  homeCard: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.49, 
    aspectRatio: 0.8, // ration largeur/hauteur de 1 pour card carrée
    margin: 0.5,
    padding: 5
  },

  homeArtworksBox : {
    backgroundColor: "white",
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  homeImage: {
    width: '90%',
    aspectRatio: 1,  
    borderRadius: 10,
    resizeMode: 'cover'
  },

  homeText:{
    fontSize: 12,
    fontFamily: 'NotoSansMono-Regular',
  },

  homeTextContainer:{
    width: '85%',
  },

  authorText:{
    fontFamily: 'NotoSansMono-Bold',
    fontSize: 12,
    marginBottom: 0
  },

  titleText:{
    fontSize: 12
  },

  homeTitle: {
    fontFamily: 'NotoSansMono-Bold',
  }
});
