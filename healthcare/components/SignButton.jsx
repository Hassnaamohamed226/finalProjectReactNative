import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SignButton = ({ text, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#45B3CB',
        width: '100%',
        borderRadius: 20,
        padding: 10,
      },
      btnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
      },
});

export default SignButton;
