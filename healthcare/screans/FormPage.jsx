import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const FormPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [chronicDiseases, setChronicDiseases] = useState('');
  const [patientComplaint, setPatientComplaint] = useState('');

  const handleFormSubmit = () => {
    // Handle the form submission logic here
    // You can send the form data to an API or perform any other action
    // For now, we'll just log the form data
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Chronic Diseases:', chronicDiseases);
    console.log('Patient Complaint:', patientComplaint);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type Your Complaint</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Chronic Diseases"
        value={chronicDiseases}
        onChangeText={(text) => setChronicDiseases(text)}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Patient Complaint"
        multiline={true}
        numberOfLines={4}
        value={patientComplaint}
        onChangeText={(text) => setPatientComplaint(text)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#eeeeee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#45B3CB',
    textAlign:'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textArea: {
    backgroundColor: 'white',
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: '#45B3CB',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 18,
  },
});

export default FormPage;
