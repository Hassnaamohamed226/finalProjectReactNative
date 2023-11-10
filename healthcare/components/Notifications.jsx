import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Notifications = () => {
  return (
    <View style={styles.notificationContainer}>
      <TouchableOpacity style={styles.btn}>
      <Text style={styles.notificationText}> request from doctor ahmed</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}> 
        <Text>  <Icon name="check" size={26} color="green" /></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}> 
        <Text> <Icon name="times" size={24} color="red" /></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}> 
        <Text> <Icon name="trash" size={24} color="blue" /></Text>
      </TouchableOpacity>
      </View>
     </TouchableOpacity>
       
        
        
    
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'col',
  

    padding: 8,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
  },
 
  notificationText: {
    fontSize: 18,
    overflow:'hidden',
  },
  btn:{
     backgroundColor:'#e7eaf6',
     padding:8,
     borderRadius:10,
     
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
  },
 
});

export default Notifications;
