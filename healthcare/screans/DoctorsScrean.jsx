
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Doctors from '../components/Doctors'; // Import the Doctors component
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { View } from 'react-native-web';

const API_URL = "http://localhost:3000";
const DoctorsScreen = () => {
  const navigation = useNavigation();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors from the API
    axios.get(`${API_URL}/doctors`)
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  }, []);
  

  // Handle the onPress event when a doctor's profile is clicked
  const handleDoctorPress = (doctorId) => {
    // You can navigate to another screen here using your navigation system
    // For example, if you're using React Navigation, you can do:
    navigation.navigate('DoctorDetails', { doctorId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
        {doctors.map((doctor) => (
          <Doctors
            key={doctor.id_doctor}
            doctorInfo={doctor}
            onPress={() => handleDoctorPress(doctor.id_doctor)}
          />
        ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eaf6f6',
    marginTop:30,
  },
});

export default DoctorsScreen;
DoctorsScreen.js
DoctorsScreen.js
