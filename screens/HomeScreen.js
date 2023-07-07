import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Artwork from "../components/Artwork";
import DropdownComponent from "../components/DropdownComponent"

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
          console.log(image)
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
      const filteredArtworks = artworksData.filter((data) => data.department === selectedDepartment);
      setFilteredArtworks(filteredArtworks);
    } else {
      setFilteredArtworks(artworksData);
    }
  }, [artworksData, selectedDepartment]);

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
  };

  const uniqueDepartments = [...new Set(departments.map((e) => e.department))];
  const departmentsDropdown = [
    { label: 'All Departments', value: null },
    ...uniqueDepartments.map((data, i) => ({
      label: data,
      value: data,
    })),
  ];

  const artworks = filteredArtworks.map((data, i) => {
    const isFavorite = favorites.some(favorite => favorite.title === data.title);
    return <Artwork key={i} props={data} isFavorite={isFavorite}/>
})
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <DropdownComponent
        departments={departmentsDropdown}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={handleDepartmentChange}
      />
      <ScrollView>
        {artworks}
      </ScrollView>
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


});
