import React, {useContext, useState} from 'react';
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
import {AuthContext} from '../context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useContext(AuthContext);

  const handleSubmit = async () => {
    const userData = {
      name: name,
      email: email,
      password,
    };

    const resp = await axios.post('http://10.0.2.2:5000/signup', userData);
    if (resp.data.error) {
      Alert.alert(resp.data.error);
    } else {
      setState(resp.data);
      await AsyncStorage.setItem('token', JSON.stringify(res.data));
      Alert.alert('Registered Successfully');
      navigation.navigate('Login');
    }
    // await axios
    //   .post('http://10.0.2.2:5000/signup', userData)
    //   .then(res => {
    //     console.log(res.data);
    //     if (res.data.status == 'ok') {
    //       setState(Response.data)
    //     } else {
    //       Alert.alert(JSON.stringify(res.data));
    //     }
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo/logo1.png')} style={styles.logo} />
      <TextInput
        onChangeText={text => setName(text)}
        placeholder="Name"
        style={styles.input}
        value={name}
        placeholderTextColor={'grey'}
      />
      <TextInput
        onChangeText={text => setEmail(text)}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        placeholderTextColor={'grey'}
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        placeholderTextColor={'grey'}
      />

      {/* <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
      /> */}
      {/* <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => handleSubmit()}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signupText}>
          Already have an account? <Text style={styles.signupLink}>Log In</Text>
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
  },
  logo: {
    width: 500,
    height: 500,
    // top:50
    // marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    // top:50
    bottom: 80,
    color: '#000',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#007bff',
    marginBottom: 20,
    bottom: 80,
  },
  loginButton: {
    width: '100%',
    height: 50,
    bottom: 80,
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
    bottom: 70,
  },
  signupLink: {
    color: '#007bff',
  },
});
