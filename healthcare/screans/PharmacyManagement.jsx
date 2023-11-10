// DoctorsManagement.js


import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PharmactManagement = () => {






  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
          <View style={styles.pharmcyItem}>
            <Text style={styles.text}>Name: </Text>
            <Text style={styles.text}>profileImage: </Text>
            <Text style={styles.text}>Address: </Text>
            <Text style={styles.text}>mobileNumber:</Text>
            <Text style={styles.text}>HomeService :</Text>
            
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
  pharmcyItem: {
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

export default PharmactManagement;
