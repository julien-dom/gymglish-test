import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Favorite({ navigation }) {
 return (
   <SafeAreaView style={styles.container}>
     <Text>Favorite Screen</Text>
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