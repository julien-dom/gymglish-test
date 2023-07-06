import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Artwork(props) {
    return (
    <TouchableOpacity style={styles.container}>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: `80%`,
      },
  });