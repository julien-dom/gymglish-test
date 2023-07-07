import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Favorite({ navigation }) {

 let favorites = <Text>No article</Text>;

 return (
   <SafeAreaView style={styles.container}>
     <Text>Favorite Screen</Text>
     {favorites}
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