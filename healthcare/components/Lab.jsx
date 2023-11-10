
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const Lab = ({ labInfo ,onPress  }) => {
  return (
    
    <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.profileContainer}>
      <Image source={labInfo.image} style={styles.profileImage} />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{labInfo.name}</Text>
     
      
      <Text style={styles.address}>
        <FontAwesome name="map-marker" size={16} color="#45B3CB" /> {labInfo.address}
      </Text>
      <Text style={styles.price}>
        <FontAwesome name="dollar" size={16} color="#45B3CB" /> {labInfo.HomeService}
      </Text>
     
      <Text style={styles.mobileNumber}>
        <FontAwesome name="mobile" size={16} color="#45B3CB" /> {labInfo.mobileNumber}
      </Text>
      <Text style={styles.waitingPeriod}>
        <FontAwesome name="comments" size={16} color="#45B3CB" /> {labInfo.message}
      </Text>
      <View style={styles.horizontalLine} />
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'col',
    marginLeft:20,
    padding: 16,
  },
  profileContainer: {
   
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // To create a circular image, set borderRadius to half of width/height
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
 
 
  address: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
  },
  waitingPeriod: {
    fontSize: 14,
  },
  mobileNumber: {
    fontSize: 14,
  },
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 8, // Adjust spacing as needed
  },
});

export default Lab;
