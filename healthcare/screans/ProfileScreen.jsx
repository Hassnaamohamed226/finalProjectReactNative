// ProfileScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileScreen = () => {
  const [user, setUser] = useState([]);
  const handleLogout = () => {
    // Implement your logout logic here
  };
  useEffect(() => {
    displayData();
  }, []);
  const displayData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("patient");
      if (storedData !== null) {
        setUser(JSON.parse(storedData));
        console.log(storedData.username)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../../New folder (11)/assets/doctor.png")}
          style={styles.profileImage}
        />
         

        {user.map((item) => (
          <View key={item.id_patient}>
          <Text style={styles.userName}>{item.username}</Text>
          <Text style={styles.userDetails}>{item.email}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.btn} onPress={handleLogout}>
          <Text style={styles.txt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 40,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userDetails: {
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    height: 40,
    borderRadius: 7,
    padding: 7,
  },
  btn: {
    backgroundColor: "gray",
    margin: 10,
    width: "28%",
    borderRadius: 10,
  },
  txt: {
    padding: 12,
    color: "white",
  },
});

export default ProfileScreen;
