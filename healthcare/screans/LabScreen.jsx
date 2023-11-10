
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Lab from './../components/Lab';


const LabScreen = () => {
  const navigation = useNavigation();

  // Define the data for the doctors
  const labData = [
    {
      id: 1,
      name: 'Laboratory name',
      address: '123 Main Street, City',
      HomeService: 'price is 5 pounds ',
      mobileNumber: 'Contact: (123) 456-7890',
      image: require('../assets/s5.png'), // Replace with the actual image path
      message:'SendUs Message',
    },
    // Add more doctor data objects as needed
  ];

  // Handle the onPress event when a doctor's profile is clicked
  const handleDoctorPress = (labId) => {
    // You can navigate to another screen here using your navigation system
    // For example, if you're using React Navigation, you can do:
    navigation.navigate('DoctorDetails', { labId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {labData.map((lab) => (
          <Lab
            key={lab.id}
            labInfo={lab}
            onPress={() => handleDoctorPress(lab.id)}
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

export default LabScreen;
