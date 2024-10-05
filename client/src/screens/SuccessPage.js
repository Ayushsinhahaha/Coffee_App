import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const SuccessPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/successful.png')} // You can replace this with a success icon or image
        style={styles.image}
      />
      <Text style={styles.title}>Payment Successful!</Text>
      <Text style={styles.message}>Thank you for your purchase. Your transaction was successful.</Text>
      
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}  // Assuming you have a Home screen
        color="#00704c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00704c',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default SuccessPage;
