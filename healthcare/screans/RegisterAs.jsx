import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button, Image, FlatList  } from 'react-native';
import ImageSign from '../components/ImageSign'; // Import the ImageSign component
import { useNavigation } from '@react-navigation/native';
import RegisterScrean from './RegisterScrean';
import RegisterAsDoctor from './RegisterAsDoctor';
import RegisterAsPharmacy from './RegisterAsPharmacy';
import RegisterAsLaboratory from './RegisterAsLaboratory';


const RegisterAs = () => {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      {/* You can customize the ImageSign component with your desired props */}
      <ImageSign
        src={require('../assets/d.png')} // Provide the image source
        style={{ marginBottom: 20 }} // Add any additional styles
      />

      <Text style={styles.title}>Register As:</Text>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("register", RegisterScrean)}>
        <Text style={styles.optionText}>Patient</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("register_As_doctor", RegisterAsDoctor)}>
        <Text style={styles.optionText}>Doctor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("register_As_pharmacy", RegisterAsPharmacy)}>
        <Text style={styles.optionText}>Pharmacy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("register_As_laboratory", RegisterAsLaboratory)}>
        <Text style={styles.optionText}>Laboratory</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#45B3CB',
    width: '100%',
    height: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
});

export default RegisterAs;
