import React from 'react';
import {  Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ServiceCard = ({ nav, imageSource, cardText}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
     // Use the navigation prop here
     onPress={nav} 
      activeOpacity={0.7}
    >
      <Image
        source={imageSource}
        style={styles.cardImage}
      />
      <Text style={styles.cardText}>{cardText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#45B3CB',
    borderRadius: 8,
    width: '43%',
    height: 130,
    marginRight: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: '80%',
    padding: 5,
  },
  cardText: {
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    color: 'white',
    borderRadius: 8,
    padding: 5,
  },
});

export default ServiceCard;
