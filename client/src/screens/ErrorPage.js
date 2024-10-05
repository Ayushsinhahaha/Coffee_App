import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const ErrorPage = ({ navigation, errorMessage,coffee,data }) => {
  
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/error.png')} // Replace with your error icon
        style={styles.image}
      />
      <Text style={styles.title}>Payment Failed</Text>
      <Text style={styles.message}>
        {errorMessage || "Something went wrong with the payment. Please try again."}
      </Text>
      
      <Button
        title="Retry Payment"
        onPress={() => navigation.navigate('Cart')}  // Replace with your payment screen navigation
        color="#d9534f"
      />
      
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
        color="#5bc0de"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8d7da',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d9534f',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default ErrorPage;
