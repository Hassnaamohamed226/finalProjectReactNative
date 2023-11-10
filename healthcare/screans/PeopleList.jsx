
// import React from 'react';
// import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';

// const people = [
//   { id: 1, name: 'User 1', imageUrl: '../assets/user.png', recentMessage: 'Hello!', time: '10:00 AM' },
//   { id: 2, name: 'User 2', imageUrl: '../assets/user.png', recentMessage: 'Hi there', time: '11:30 AM' },
//   { id: 3, name: 'User 3', imageUrl: '../assets/user.png', recentMessage: 'Good morning', time: '12:45 PM' },
// ];

// function CustomRow({ user, onPress }) {
//   return (
//     <View style={styles.rowContainer}>
//       <Image source={{ uri: user.imageUrl }} style={styles.circleImage} />
//       <View style={styles.userInfo}>
//         <Text style={styles.user}>{user.name}</Text>
//         <Text>{user.recentMessage}</Text>
//       </View>
//       <View style={styles.messageInfo}>
//         <Text >{user.time}</Text>
//         <Button title="Chat" onPress={onPress} />
//       </View>
//     </View>
//   );
// }

// function PeopleList({ navigation }) {
//   return (
//     <FlatList
//       data={people}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <CustomRow
//           user={item}
//           onPress={() => navigation.navigate('ChatScreen', { user: item })}
//         />
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   circleImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//     backgroundColor:'#aeccc6',
//   },
//   userInfo: {
//     flex: 1,
//     flexDirection:'col',
//   },
//   user:{
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
//   messageInfo: {
//     alignItems: 'flex-end',
//   },
// });

// export default PeopleList;
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

const people = [
  { id: 1, name: 'User 1', imageUrl: '../../healthCare/assets/doctor.png', recentMessage: 'Hello!', time: '10:00 AM' },
  { id: 2, name: 'User 2', imageUrl: '../../healthCare/assets/doctor.png', recentMessage: 'Hi there', time: '11:30 AM' },
  { id: 3, name: 'User 3', imageUrl: '../../healthCare/assets/doctor.png', recentMessage: 'Good morning', time: '12:45 PM' },
  
];

function CustomRow({ user, onPress }) {
  return (
    
    <TouchableOpacity style={styles.rowContainer} onPress={onPress}>
      <Image source={{ uri: user.imageUrl }} style={styles.circleImage} />
      <View style={styles.userInfo}>
        <Text style={styles.user}>{user.name}</Text>
        <Text>{user.recentMessage}</Text>
      </View>
      <View style={styles.messageInfo}>
        <Text>{user.time}</Text>
      </View>
    </TouchableOpacity>
  
  );
}

function PeopleList({ navigation }) {
  return (
    <ScrollView style={styles.pageContainer}>
    <FlatList
      data={people}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CustomRow
          user={item}
          onPress={() => navigation.navigate('ChatScreen', { user: item })}
        />
      )}
    />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    // 
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  user:{
        fontSize: 18,
        fontWeight: 'bold'
      },
  circleImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    backgroundColor:'#aeccc6',
  },
  userInfo: {
    flex: 1,
  },
  messageInfo: {
    alignItems: 'flex-end',
  },
});

export default PeopleList;
