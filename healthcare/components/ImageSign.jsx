import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const ImageSign = ({ src, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={src} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:0.5,
    // You can add any common styles for the container here.
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 40,
    marginBottom: 50,
  },
});

export default ImageSign;
