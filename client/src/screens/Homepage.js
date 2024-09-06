import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Splash from './Splash';

const HomePage = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#203933', alignItems: 'center'}}>
      {/* Heading */}
      <View style={{margin: 18, top: 40}}>
        <Text
          style={{
            fontSize: 50,
            color: '#fff',
            fontWeight: 800,
            textAlign: 'left',
          }}>
          Have A
        </Text>
        <Text
          style={{
            fontSize: 50,
            color: '#fff',
            fontWeight: 800,
            textAlign: 'left',
          }}>
          Nice Coffee
        </Text>
        <Text
          style={{
            fontSize: 50,
            color: '#fff',
            fontWeight: 800,
            textAlign: 'left',
          }}>
          Today.
        </Text>
      </View>
      {/* Image */}

      <Image
        source={require('../assets/images/icedcoffee.png')}
        style={{width: 400, height: 400}}
      />

      {/* Button */}
      <TouchableOpacity onPress={()=>navigation.navigate('GetStarted')}
        style={{
          top: 30,
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00704A',
          borderRadius: 20,
          height: 80,
        }}>
        <Text style={{fontSize: 40, color: '#fff', fontWeight: 700}}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
