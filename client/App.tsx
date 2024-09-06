import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomePage from './src/screens/Homepage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Getstarted from './src/screens/Getstarted';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import Wallet from './src/screens/Wallet';
import Cart from './src/screens/Cart';
import Account from './src/screens/Account';

const Stack=createNativeStackNavigator();


const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Homepage" component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name="GetStarted" component={Getstarted} options={{headerShown:false}}/>
        {/* Login and signup */}
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        {/* After login screen, the pages which will come */}
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        {/* bottom tab pages */}
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Wallet" component={Wallet} options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
        <Stack.Screen name="Account" component={Account} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})