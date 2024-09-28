import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import {SP_KEY} from '@env'
import PaymentScreen from './PaymentScreen';
// require('dotenv').config()

const Payment = () => {
  return (
    <StripeProvider
      publishableKey={SP_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PaymentScreen/>
    </StripeProvider>
  );
};

export default Payment;

const styles = StyleSheet.create({});
