import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
const home = ({userr}) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);

  const handleSignup = async () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3000/signup",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignin = async () => {
    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:3000/signin", data);
      userr =  response.data.user;
      console.log(response.data.user);
     navigation.navigate("userdetaies",userr);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetUser = async () => {
    const userId = user?.email;

    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      //setUser(response.data.user);
      console.log(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access camera roll denied");
      return;
    }

    const filename = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!filename.cancelled) {
      setImage(filename.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Upload Image" onPress={handleImageUpload} />
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      <Button title="Sign Up" onPress={handleSignup} />
      <Text>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" onPress={handleSignin} />
      
      {user && (
        <View>
          <Text>User Data</Text>
          <Text>Username: {user.username}</Text>
          <Text>Email: {user.email}</Text>
          {user.image && (
            <Image
              source={{ uri: `http://localhost:3000/uploads/${user.image}` }}
              style={styles.imagePreview}
            />
          )}
          <Button title="Get User Data" onPress={handleGetUser} />
        </View>
      )}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});
