
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Pharmacy from '../components/Pharmacy'; // Import the Doctors component
import { useNavigation } from '@react-navigation/native';

const DoctorsScreen = () => {
  const navigation = useNavigation();

  // Define the data for the doctors
  const pharmacyData = [
    {
      id: 1,
      name: 'pharmacy name',
      address: '123 Main Street, City',
      HomeService: 'price is 5 pounds ',
      mobileNumber: 'Contact: (123) 456-7890',
      image: require('../assets/s5.png'), // Replace with the actual image path
      message:'SendUs Message',
    },
    // Add more doctor data objects as needed
  ];

  // Handle the onPress event when a doctor's profile is clicked
  const handleDoctorPress = (pharmacyId) => {
    // You can navigate to another screen here using your navigation system
    // For example, if you're using React Navigation, you can do:
    navigation.navigate('DoctorDetails', { pharmacyId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {pharmacyData.map((pharmacy) => (
          <Pharmacy
            key={pharmacy.id}
            pharmacyInfo={pharmacy}
            onPress={() => handleDoctorPress(pharmacy.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DoctorsScreen;
