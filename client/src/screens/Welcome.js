import {StyleSheet, Text, View, BackHandler, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Wallet from './Wallet';
import Cart from './Cart';
import Account from './Account';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Welcome = ({navigation}) => {
  //useeffect to get the data after getting logged in

  // async function getData() {
  //   const token = await AsyncStorage.getItem('token');
  //   console.log('token from welcome page->>>>>', token);
  //   axios
  //     .post('http://10.0.2.2:5000/userdata', {token: token})
  //     .then(res => console.log('data from welcome screen', res.data))
  //     .catch(err => console.log('error from welcome page', err));
  // }

  const handleBackPress = () => {
    Alert.alert('Exit App', 'Are You sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Exit',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  useFocusEffect(
    React.useCallback(()=>{
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return ()=>{
      BackHandler.removeEventListener("hardwareBackPress",handleBackPress);
    }
    })
  )

  // useEffect(() => {
  //   getData();
    
  // }, []);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          paddingVertical: 5,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: '#00704A',
          position: 'absolute',
          height: 60,
        },
        tabBarActiveTintColor: 'red',
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <IonIcons name="home" size={28} color={'#fff'} />;
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({color, size}) => {
            return <IonIcons name="wallet" size={28} color={'#fff'} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => {
            return <IonIcons name="cart" size={28} color={'#fff'} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => {
            return <IonIcons name="people" size={28} color={'#fff'} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
