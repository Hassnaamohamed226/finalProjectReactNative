
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notifications from '../components/Notifications'; // Import the Notifications component
import DoctorsManagement from './DoctorsManagement';
import { useNavigation } from '@react-navigation/native';
import PharmactManagement from './PharmacyManagement';
import LaboratoryManagement from './LaboratoryManagement';

const AdminDashboardScreen = () => {
  const navigation = useNavigation();
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>

      <TouchableOpacity style={styles.card} onPress={toggleNotifications}>
        <Text style={styles.cardTitle}>Notifications</Text>
        <View style={styles.iconContainer}>
          <Icon name="bell" size={24} color="red" />
        </View>
      </TouchableOpacity>

      {/* Show the Notifications component when showNotifications is true */}
      {showNotifications && (
        <View style={styles.notificationDropdown}>
          <ScrollView>
            <Notifications />
            <Notifications />
            <Notifications />
            {/* Add more Notifications components here */}
          </ScrollView>
        </View>
      )}

     {/* ... Other sections ... */}
<TouchableOpacity style={styles.card}
   onPress={() => navigation.navigate("DoctorsManagement", DoctorsManagement)}>
  <Text style={styles.cardTitle}>Doctors Management</Text>
  {/* Add doctor management content here */}
  
</TouchableOpacity>

<TouchableOpacity style={styles.card}
 onPress={() => navigation.navigate("PharmcyManagement", PharmactManagement)}>
  <Text style={styles.cardTitle}>Pharmacys Management</Text>
  {/* Add pharmacy management content here */}
</TouchableOpacity>

<TouchableOpacity style={styles.card}
 onPress={() => navigation.navigate("LaboratoryManagement", LaboratoryManagement)}>
  <Text style={styles.cardTitle}>Laboratorys Management</Text>
  {/* Add laboratory management content here */}
</TouchableOpacity>

<TouchableOpacity style={styles.card}>
  <Text style={styles.cardTitle}>Doctor Requests</Text>
  {/* Add doctor request content here */}
</TouchableOpacity>

<TouchableOpacity style={styles.card}>
  <Text style={styles.cardTitle}>Laboratory Requests</Text>
  {/* Add laboratory request content here */}
</TouchableOpacity>

<TouchableOpacity style={styles.card}>
  <Text style={styles.cardTitle}>Pharmacy Requests</Text>
  {/* Add pharmacy request content here */}
</TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  iconContainer: {
    width: '55%',
    height: 40,
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notificationDropdown: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
});

export default AdminDashboardScreen;
