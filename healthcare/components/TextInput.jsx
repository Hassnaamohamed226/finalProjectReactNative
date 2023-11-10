
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const MyTextInput = ({ placeholder, icon, value, onchange,secureTextEntry }) => {
   {/* <MaterialIcons name={send} style={styles.icon}></MaterialIcons> */}
  return (
   
    <View style={styles.inputContainer}>
      {icon && (
        <FontAwesome5 name={icon} style={styles.icon} />
        
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onchange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({

inputContainer: {
  flexDirection: 'row',
  
  alignItems: 'center',
  height: 45,
  marginBottom: 10,
  borderWidth: 1,
  borderRadius: 17,
  backgroundColor: 'white',
  width: '100%',
  shadowColor: 'black', // Add shadow
  shadowOffset: { width: 0, height: 3 }, // Add shadow
  shadowOpacity: 0.1, // Add shadow
  elevation: 3, // Add shadow on Android
},
input: {
  flex: 1,
  paddingLeft: 10,
  backgroundColor: 'transparent', // Make background transparent
},
icon: {
  width: 30, // Adjust the icon's width as needed
  height: 30, // Adjust the icon's height as needed
  marginLeft: 10,
  color: '#45B3CB',
  fontWeight: '700',
  padding:7,
},
});
export default MyTextInput;
