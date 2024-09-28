import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AuthProvider } from './src/context/auth';
import NavigationScreen from './src/screens/NavigationScreen';
import coffees from './src/config/coffees';
import { addMyProducts } from './src/reduxtoolkit/ProductSlice';


const Stack = createNativeStackNavigator();

const AppNavigator = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    coffees.map(coffee => {
      dispatch(addMyProducts(coffee));
    });
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationScreen/>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
