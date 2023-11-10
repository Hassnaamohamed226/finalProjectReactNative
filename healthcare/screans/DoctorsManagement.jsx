// DoctorsManagement.js


import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DoctorsManagement = () => {


  // Function to delete a doctor by their ID
  const handleDeleteDoctor = (doctorId) => {
    setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== doctorId));
  };

  // Function to update a doctor's information (you can customize this as needed)
  const handleUpdateDoctor = (doctorId) => {
    // Implement the logic for updating a doctor's information
    // You may navigate to another screen for editing or show a modal for updating data.
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
          <View style={styles.doctorItem}>
            <Text style={styles.text}>Name: </Text>
            <Text style={styles.text}>Specialty: </Text>
            <Text style={styles.text}>Job Title: </Text>
            <Text style={styles.text}>Address: </Text>
            <Text style={styles.text}>Price:</Text>
            <Text style={styles.text}>Waiting Period:</Text>
            <Text style={styles.text}>Mobile Number: </Text>
            <View style={styles.btns}>
            <TouchableOpacity
              style={styles.actionButton}
              
            >
              <Text  style={styles.txt}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              
            >
              <Text   style={styles.txt}>Update</Text>
            </TouchableOpacity>
            </View>
           
          </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt:{
    color:'white',
  },
  text:{
    borderWidth: 1,
    borderColor: 'gray',
    marginTop:7,
    padding:7,
    borderRadius:9,
    height:40,
  },
  btns:{
     flexDirection:'row',
     justifyContent:'space-around',
     marginTop:7,
  },
  doctorItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  actionButton: {
    backgroundColor: '#FF8c00', 
    
    padding: 8,
    margin: 8,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default DoctorsManagement;
