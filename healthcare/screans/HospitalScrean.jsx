import React from 'react'
import { View, Image, TouchableOpacity,Text, StyleSheet ,SafeAreaView} from 'react-native';
import MainScrean from '../screans/MainScrean'
import { useNavigation } from '@react-navigation/native';


export default function HospitalScrean(){
  const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.container}>
      <Image source={require('../../New folder (11)/assets/about.png')} style={styles.image} />
      <Text style={styles.title}><Text style={styles.letter}>A</Text>bout <Text style={styles.letter}>U</Text>s</Text>
      <Text style={styles.title}>We are an electronic website for your medical services, where you can request medications, medical consultations, and book clinics, 
all of this through one place, 
which is our website.</Text>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Main ", MainScrean)} >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      backgroundColor:'#eaf6f6',
    },
    image: {
      width: 200, // Adjust the width and height as needed
      height: 150,
      marginBottom: 30,
      borderRadius: 10, // Adjust the spacing between the image and button
    },
    title: {
    
      fontSize: 22,
      marginBottom: 7,
      textAlign: 'left',
      marginTop:7,
      margin:5,
      padding:4,
    },
    letter: {
      fontWeight: 'bold',
      fontSize: 30,
      color: '#FF8c00',
    },
    button: {
      backgroundColor: '#45B3CB', // Background color
      borderRadius: 10, // Border radius
      padding: 10, 
      width: 120,// Adjust the padding as needed
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white', // Text color
      fontSize: 16, // Font size
    },
  });
  