import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import Header from '../components/Header';

const ContactUs = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    // Submit logic or send data to backend
    Alert.alert('Thank You!', 'Your message has been sent');
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  };

  return (
    <>
      <Header title={'Contact Us'} backIcon={'arrow-back'} onPressLeft={()=>navigation.goBack()} />
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={styles.title}>Contact Us</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Your Message"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
          />
          <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: '90%',
  },
});

export default ContactUs;
