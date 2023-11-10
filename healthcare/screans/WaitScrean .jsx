import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
const WaitScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <FontAwesome name="hourglass" size={32} color="black"  /> 
        <Text style={styles.text}>Your request is pending.</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textt}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#45B3CB',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical:50,
    flexDirection: 'col', // Use row direction to center horizontally
    alignItems: 'center',
  },
  btn:{
    backgroundColor: '#45B3CB',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical:10,
    margin:30,
    
  },
  text: {
    marginTop: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  textt: {
   
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WaitScreen;
