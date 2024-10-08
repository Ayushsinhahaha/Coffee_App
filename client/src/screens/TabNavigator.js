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
import {useFocusEffect} from '@react-navigation/native';
import SearchField from '../components/SearchField';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
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
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }),
  );

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
        name="Search"
        component={SearchField}
        options={{
          tabBarIcon: ({color, size}) => {
            return <IonIcons name="search" size={28} color={'#fff'} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({color, size}) => {
            return <IonIcons name="wallet" size={28} color={'#fff'} />;
          },
        }}
      /> */}
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

export default TabNavigator;

const styles = StyleSheet.create({});
