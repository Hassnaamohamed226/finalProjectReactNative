import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ImageSign from "../components/ImageSign"; // Import the ImageSign component
import SignButton from "../components/SignButton"; // Import the SignButton component
import MyTextInput from "../components/TextInput";
import LoginScrean from './LoginScrean';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const API_URL = "http://localhost:3000";

const RegisterAsPharmacy = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [license, setlicense] = useState("");
  const [address, setaddress] = useState("");
  const [image, setImage] = useState(null);

  const navigation = useNavigation();
  const handleSignUp = async () => {
    try {
      await axios.post(`${API_URL}/pharmacy/signup`, { username, password, email, license, address });
      alert("User registered successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to register user");
    }
  };
  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access image library denied");
      return;
    }

    const imageResult = await ImagePicker.launchImageLibraryAsync();
    if (!imageResult.canceled) {
      const formData = new FormData();
      formData.append("image", {
        uri: imageResult.uri,
        name: "image.jpg",
        type: "image/jpg",
      });
      formData.append("username", username);

      try {
        await axios.post(`${API_URL}/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Image uploaded successfully");
        setImage(imageResult.uri);
      } catch (error) {
        console.log(error);
        alert("Failed to upload image");
      }
    }
  };
  return (
    <ScrollView>
    <View style={styles.container}>
      {/* You can customize the ImageSign component with your desired props */}
      <ImageSign
        src={require("../assets/d.png")} // Provide the image source
        style={{ marginBottom: 20 }} // Add any additional styles
      />
      <br/><br/>
      {/* TextInput for username and password input */}
       <MyTextInput
          style={styles.input}
          placeholder="Email"
          icon="envelope"
          value={email}
          onchange={setEmail}
        />
        <MyTextInput
          style={styles.input}
          placeholder="Username"
          icon="user"
          value={username}
          onchange={setUsername}
        />
        <MyTextInput
          style={styles.input}
          placeholder="Address"
          icon="home"
          value={address}
          onchange={setaddress}
        />
        <MyTextInput
          style={styles.input}
          placeholder="License"
          icon="edit"
          value={license}
          onchange={setlicense}
        />
        <MyTextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry // To hide the entered text
          icon="eye-slash"
          value={password}
          onchange={setPassword}
        />
        <MyTextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry // To hide the entered text
          icon="eye"
          value={password}
          onchange={setPassword}
        />
      {/* Sign in button */}
      <SignButton
        text="Sign Up"
        onPress={handleSignUp}
      />
     <Text style={styles.text}> have an account !
         <TouchableOpacity onPress={() => navigation.navigate("logins",LoginScrean )}>
        <Text  style={styles.textt}> Sign in</Text>
        </TouchableOpacity>
        </Text>
    </View>
    </ScrollView>
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

export default RegisterAsPharmacy;
