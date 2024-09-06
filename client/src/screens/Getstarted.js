import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons'

const Getstarted = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    {/* back button */}


      {/* Image */}
      <View>
        <Image
          source={require('../assets/logo/logo1.png')}
          style={{width: 600, height: 600}}
        />
      </View>
      {/* Buttons */}
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}
        style={{
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00704A',
          borderRadius: 20,
          height: 60,
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 600}}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Signup')}
        style={{top:20,
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          height: 60,
          borderColor: '#00704A',
          borderWidth: 1,
        }}>
        <Text style={{color: '#00704A', fontSize: 20, fontWeight: 600}}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Getstarted;

const styles = StyleSheet.create({});
