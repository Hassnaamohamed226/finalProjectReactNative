import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FeedbackScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    // Handle the submission of feedback (e.g., send it to an API)
    console.log('Feedback submitted:', name, email, message, rating);
    // You can replace the console.log with your submission logic.
  };

  const handleStarPress = (star) => {
    setRating(star);
  };

  const renderStars = () => {
    const stars = [1, 2, 3, 4, 5];

    return stars.map((star) => (
      <TouchableOpacity
        key={star}
        onPress={() => handleStarPress(star)}
      >
        <Icon
          name={star <= rating ? 'star' : 'star-o'} // 'star' for filled, 'star-o' for empty
          size={30}
          color={star <= rating ? '#ffc93c' : 'gray'}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Feedback</Text>
      <Text style={styles.paragraph}>
        We'd love to hear your feedback. Please use the form below to share your thoughts with us.
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />

      <Text style={styles.label}>Rate</Text>
      <View style={styles.starContainer}>{renderStars()}</View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:10,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#eeeeee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#45B3CB',
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 20,
    color:'#45B3CB',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    borderRadius:10,
    backgroundColor:'white',
  },
  textArea: {
    backgroundColor:'white',
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    borderRadius:10,
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
  starContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent:'center',
  },
});

export default FeedbackScreen;
