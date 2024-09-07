import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    // console.log(email, password);
    const userData = {
      email: email,
      password,
    };
    axios
      .post('http://10.0.2.2:5000/login', userData)
      .then(res => {
        console.log(res.data);
        if (res.data.status == 'ok') {
          Alert.alert('Logged In Successfully');
          console.log("res.data.data;;;;;;;;;;",res.data.data)
          // getting tokens
          AsyncStorage.setItem("token",res.data.data)
          navigation.navigate('Welcome');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo/logo1.png')} style={styles.logo} />
      {/* <TextInput
        style={styles.input}
        placeholder="Name"
        keyboardType="default" value={name} onChangeText={text=>setName(text)} autoCapitalize='words'
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSubmit()}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
    // bottom:50
  },
  logo: {
    width: 500,
    height: 500,
    // marginBottom: 50,
    top: 50,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    bottom: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#007bff',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#006241', // Starbucks Green
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#6c757d',
  },
  signupLink: {
    color: '#007bff',
  },
});
