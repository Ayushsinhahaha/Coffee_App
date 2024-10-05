import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import Header from '../components/Header';

const EditProfile = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = () => {
    if (!username || !email) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    // Logic to save the updated data (can be integrated with API)
    Alert.alert(
      'Profile Updated',
      'Your profile has been successfully updated',
    );
  };

  return (
    <>
    <Header
        image={require('../assets/logo/logo1.png')}
        title={'Edit Profile'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => navigation.navigate('Home')}
        backIcon={'arrow-back'}
        cartIcon={'home'}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Button title="Update Profile" onPress={handleUpdate} color="#00704c" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00704c',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default EditProfile;
