import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import ImageSign from "../components/ImageSign"; // Import the ImageSign component
import SignButton from "../components/SignButton"; // Import the SignButton component
import MyTextInput from "../components/TextInput";
import RegisterAs from "./RegisterAs";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

const API_URL = "http://localhost:3000";

const LoginScrean = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const storeUser = async (userr) => {
    try {
      await AsyncStorage.setItem("patient", JSON.stringify(userr))|| [];
      //navigation.navigate("Chat");
    } catch (e) {
        alert("Error! While saving username");
    }
  };
const newuserr=[{name:"has",id:1},{id:1}]
console.log(newuserr.find((user) => user.name ));
  const handleSignIn = async () => {
    try {
      const response = await axios.post(`${API_URL}/patient/signin`, {
        username,
        password,
      });
      alert("User signed in successfully");
      console.log(response.data[0]);
      const patuser=response.data;
      //AsyncStorage.clear();
      storeUser(patuser);

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      alert("Invalid credentials");
    }
  };
  return (
    <View style={styles.container}>
      {/* You can customize the ImageSign component with your desired props */}
      <ImageSign
        src={require("../assets/d.png")} // Provide the image source
        style={{ marginBottom: 20 }} // Add any additional styles
      />

      {/* TextInput for username and password input */}
      <MyTextInput
        style={styles.input}
        placeholder="Email or User Name"
        icon="envelope"
        value={username}
        onchange={setUsername}
      />

      <MyTextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry // To hide the entered text
        icon="lock"
        value={password}
        onchange={setPassword}
      />

      {/* Sign in button */}
      <SignButton text="Sign In" onPress={handleSignIn} />
      <Text style={styles.text}>
        don't have an account yet?
        <TouchableOpacity
          onPress={() => navigation.navigate("register_As", RegisterAs)}
        >
          <Text style={styles.textt}>Register Now</Text>
        </TouchableOpacity>
      </Text>
      {/* You can add more components or elements as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    padding: 15,
  },
  text: {
    margin: 10,
  },
  textt: {
    color: "#FF8c00",
    fontWeight: "600",
  },
});

export default LoginScrean;
