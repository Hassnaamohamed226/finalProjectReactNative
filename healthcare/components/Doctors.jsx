/* 
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const Doctors = ({ doctorInfo ,onPress  }) => {
  return (
    
    <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.profileContainer}>
      <Image source={doctorInfo.image} style={styles.profileImage} />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{doctorInfo.username}</Text>
      <Text style={styles.specialty}>   
        <FontAwesome name="user-md" size={16} color="#45B3CB" /> {doctorInfo.specialization}
      </Text>
      <Text style={styles.jobTitle}>
        <FontAwesome name="briefcase" size={16} color="#45B3CB" /> {doctorInfo.jobTitle}
      </Text>
      <Text style={styles.address}>
        <FontAwesome name="map-marker" size={16} color="#45B3CB" /> {doctorInfo.address}
      </Text>
      <Text style={styles.price}>
        <FontAwesome name="dollar" size={16} color="#45B3CB" /> {doctorInfo.price}
      </Text>
      <Text style={styles.waitingPeriod}>
        <FontAwesome name="hourglass" size={16} color="#45B3CB" /> {doctorInfo.appoinments}
      </Text>
      <Text style={styles.mobileNumber}>
        <FontAwesome name="mobile" size={16} color="#45B3CB" /> {doctorInfo.mobileNumber}
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
  specialty: {
    fontSize: 16,
    
  },
  jobTitle: {
    fontSize: 16,
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

export default Doctors;
 */

import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import FormPage from "../screans/FormPage";
import PeopleList from "../screans/PeopleList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://localhost:3000";

const Doctors = ({ doctorInfo }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [patId, setpatId] = useState([]);
  const [friendDcId, setfriendDcId] = useState("");

  const openModal = async () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleaddfriend = async () => {
    const storedData = await AsyncStorage.getItem("patient");
    alert("User registered successfully");
    let parseduser;
    if (storedData) {
      parseduser = JSON.parse(storedData);
    }
    const doc = doctorInfo.id_doctor;
    const patient = parseduser[0].id_patient
    console.log(patient);

    
    try {
      const response = await axios.post(`${API_URL}/addfriend`, {
        pat_id: patient, friend_doc_id: doc 
        /* pat_id:Number(patId),friend_doc_id:Number(friendDcId) */
      });
      console.log(response.data);

      setpatId(patient);
      setfriendDcId(doc);

      navigation.navigate("Chats", PeopleList);
      closeModal();
    } catch (error) {
      console.log(error);
      alert("Invalid credentials");
    }
  };
  const navigateToPatientComplaint = () => {
    // Navigate to the "Patient Complaint" form page using the navigation prop
    navigation.navigate("form", FormPage); // Replace 'FormPage' with the actual route name
    closeModal();
    // Close the modal after navigation
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <View style={styles.profileContainer}>
          <Image source={doctorInfo.image} style={styles.profileImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{doctorInfo.username}</Text>
          <Text style={styles.specialty}>
            <FontAwesome name="user-md" size={16} color="#45B3CB" />{" "}
            {doctorInfo.specialization}
          </Text>
          {/* <Text style={styles.jobTitle}>
            <FontAwesome name="briefcase" size={16} color= "#45B3CB" /> {doctorInfo.jobTitle}
          </Text>
          <Text style={styles.address}>
            <FontAwesome name="map-marker" size={16} color="#45B3CB" /> {doctorInfo.address}
          </Text> */}
          <Text style={styles.price}>
            <FontAwesome name="dollar" size={16} color="#45B3CB" />{" "}
            {doctorInfo.price}
          </Text>
          <Text style={styles.waitingPeriod}>
            <FontAwesome name="hourglass" size={16} color="#45B3CB" />{" "}
            {doctorInfo.appoinments}
          </Text>
          {/*  <Text style={styles.mobileNumber}>
            <FontAwesome name="mobile" size={16} color="#45B3CB" /> {doctorInfo.mobileNumber}
          </Text> */}
          <View style={styles.horizontalLine} />
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.popupText}>Hello</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={navigateToPatientComplaint}
          >
            <Text style={styles.buttonText}>Patient Complaint</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={handleaddfriend}
          >
            <Text style={styles.buttonText}>Go to Chat Page</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 5,
  },
  profileContainer: {
    marginRight: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  specialty: {
    fontSize: 16,
  },
  jobTitle: {
    fontSize: 16,
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
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  popupText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: "#45B3CB",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Doctors;
